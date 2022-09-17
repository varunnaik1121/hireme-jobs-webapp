import React from "react";
import { Modal, Typography, Box, IconButton, Button } from "@mui/material";
import TextFieldComp from "./TextField";
import { useState } from "react";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import toast from "react-hot-toast";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalUser } from "../../../context/userContext";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../../services/firebase";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";

const FormModal = ({ id, companyId }) => {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });
  const [file, setFile] = useState(null);
  const {
    IsOpenApplyModal,

    closeApplyModal,
  } = useGlobalUser();

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    e.target.value = "";
    if (selectedFile) {
      console.log(selectedFile);
      setFile(selectedFile);
    } else {
      return;
    }
  };

  const handleSubmit = async () => {
    if (userDetails.name && userDetails.email && file) {
      try {
        setLoading(true);
        toast.loading("uploading..");
        const collectionRef = collection(db, `jobApplications`);
        const stoargeRef = ref(storage, `resumes/${Date.now()}`);
        const metadata = {
          contentType: "application/pdf",
        };
        const resumeUrl = await uploadBytes(stoargeRef, file, metadata).then(
          (uploadResult) => {
            return getDownloadURL(uploadResult.ref);
          }
        );

        const payload = {
          name: userDetails.name,
          email: userDetails.email,
          resume: resumeUrl,
          jobId: id,
          companyId,
        };
        const data = await addDoc(collectionRef, payload);
        setLoading(false);
        closeApplyModal();
        toast.success("Application sent successfully..");
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("fill all the fields");
    }
  };
  return (
    <Modal
      open={IsOpenApplyModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        boxShadow: "none",
      }}
      onClose={closeApplyModal}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",

          width: {
            xs: "90%",
            sm: "400px",
            md: "500px",
          },
          backgroundColor: "#f6f7f9",

          height: "max-content",
          borderRadius: "6px",
          border: "none",
          outline: "none",
          margin: "0 5px",

          p: 4,
        }}
      >
        <Typography color="primary" fontWeight={600} fontSize={18}>
          Apply Now
        </Typography>
        <TextFieldComp
          name={"name"}
          value={userDetails.name}
          label={"Name"}
          onChange={handleChange}
        />
        <TextFieldComp
          name={"email"}
          value={userDetails.email}
          label={"email"}
          onChange={handleChange}
        />
        <Box
          sx={{
            width: "90%",
            height: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "1px solid rgba(0,0,0,.1)",
            margin: "10px 0",
          }}
          component={"label"}
        >
          <input
            hidden
            accept="application/pdf"
            type="file"
            onChange={handleFileChange}
          />

          <CloudQueueIcon
            sx={{ width: "50px", height: "50px" }}
            color="primary"
          />
          <Typography fontSize={"14px"} fontWeight={"600"}>
            upload resume ( pdf )
          </Typography>
        </Box>
        {file && (
          <Box
            sx={{
              width: "90%",

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "10px 0",
              border: "1px solid rgba(0,0,0,.1)",
            }}
          >
            <IconButton>
              <PictureAsPdfIcon fontSize="medium" color="primary" />
            </IconButton>
            <Typography
              fontSize={11}
              component={"p"}
              fontWeight={600}
              padding={"5px"}
              sx={{ madWidth: "60%" }}
            >
              {file?.name}
            </Typography>
            <Typography
              fontSize={11}
              component={"p"}
              fontWeight={600}
              margin={"0 5px"}
            >
              {(file.size / (1024 * 1024)).toFixed(2)} MB
            </Typography>
            <IconButton onClick={() => setFile(null)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
        <Box
          sx={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ width: "110px" }}
            disabled={loading}
          >
            {loading ? "uploading..." : "submit"}
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setFile(null);
              setUserDetails({
                name: "",
                email: "",
              });
              closeApplyModal();
            }}
            sx={{ width: "110px" }}
            disabled={loading}
          >
            Cancel
          </Button>
        </Box>
        <IconButton
          sx={{
            position: "absolute",
            right: "-20px",
            top: "-20px",
            background: "#f6f7f9",
            ":hover": {
              bacground: "#fff",
              color: "black",
            },
            display: {
              xs: "none",
              sm: "flex",
              md: "flex",
            },
          }}
          disableFocusRipple={true}
          onClick={closeApplyModal}
        >
          <CloseIcon fontSize="medium" color="primary" />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default FormModal;

import React, { useState } from "react";
import CompanyInfo from "./CompanyInfo";
import ImageBox from "./ImageBox";
import TextField from "./Textfield";
import { Button, Container, Box } from "@mui/material";
import "./App.css";
import { useEffect } from "react";
import { db } from "../../../services/firebase";
import {
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useGlobalUser } from "../../../context/userContext";
import imageCompression from "browser-image-compression";
import { storage } from "../../../services/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Loading from "../../Loading/Loading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import QuotesLoading from "../../Loading/QuotesLoading";
const CompanyProfile = () => {
  const { currentUser } = useGlobalUser();
  const [change, setChange] = useState(false);
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",

    industry: "",
    headquatar: "",
    website: "",
    benefits: "",
    specialities: "",
    type: "",
    about: "",
  });
  const [originalMode, setOriginalMode] = useState(true);

  const {
    name,

    industry,
    headquatar,
    website,
    benefits,
    specialities,
    type,
    about,
  } = details;

  const [companyLogo, setCompanyLogo] = useState(null);
  const [companyCoverPhoto, setCompanyCoverPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [myCompanyDetails, setMyCompanyDetails] = useState(null);

  const onChange = (e) => {
    setDetails((p) => ({
      ...p,
      [e.target.id]: e.target.value,
    }));
  };

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    let unsub;
    if (currentUser) {
      setFetchLoading(true);
      const collectionRef = collection(db, "companies");
      const q = query(
        collectionRef,
        where("companyId", "==", currentUser?.uid)
      );
      unsub = onSnapshot(q, (snapshot) => {
        setMyCompanyDetails(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]
        );
        setFetchLoading(false);
      });
    }
    return unsub;
  }, []);

  useEffect(() => {
    if (myCompanyDetails) {
      setDetails({
        name: myCompanyDetails.name,
        headquatar: myCompanyDetails.headquatar,
        website: myCompanyDetails.website,
        benefits: myCompanyDetails.benefits,
        specialities: myCompanyDetails.specialities,
        type: myCompanyDetails.type,
        about: myCompanyDetails.about,
        industry: myCompanyDetails.industry,
      });
    }
  }, [myCompanyDetails]);
  if (fetchLoading) {
    return (
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading width={40} height={40} color="#4045db" />
      </Box>
    );
  }
  //code for  updating the comapnyDetails

  const updateCompanyDetails = async () => {
    setLoading(true);
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      fileType: "images/jpg,images/png,images/jpeg",
    };
    const metadata = {
      contentType: "image/jpeg",
    };

    toast.loading("updating data it might take few seconds");
    if (companyCoverPhoto) {
      var compressedCompanyCoverPhoto = await imageCompression(
        companyCoverPhoto,
        options
      );
      const storageRef = ref(storage, `images/${Date.now()}`);

      var updatedCompanyCoverPhoto = await uploadBytes(
        storageRef,
        compressedCompanyCoverPhoto,
        metadata
      ).then((uploadResult) => {
        return getDownloadURL(uploadResult.ref);
      });
      console.log(updatedCompanyCoverPhoto);
    }
    if (companyLogo) {
      var compressedCompanyLogo = await imageCompression(companyLogo, options);
      const storageRef = ref(storage, `images/${Date.now()}`);

      var updatedCompanyLogo = await uploadBytes(
        storageRef,
        compressedCompanyLogo,
        metadata
      ).then((uploadResult) => {
        return getDownloadURL(uploadResult.ref);
      });
    }
    var payload;

    if (updatedCompanyCoverPhoto && updatedCompanyLogo) {
      payload = {
        name,
        website,
        industry,
        benefits,
        specialities,
        type,
        about,
        headquatar,
        companyProfile: updatedCompanyLogo,
        coverPhoto: updatedCompanyCoverPhoto,
      };
    } else if (updatedCompanyLogo && !updatedCompanyCoverPhoto) {
      payload = {
        name,
        website,
        industry,
        benefits,
        specialities,
        type,
        about,
        headquatar,
        companyProfile: updatedCompanyLogo,
      };
    } else if (!updatedCompanyLogo && updatedCompanyCoverPhoto) {
      payload = {
        name,
        website,
        industry,
        benefits,
        specialities,
        type,
        about,
        headquatar,
        coverPhoto: updatedCompanyCoverPhoto,
      };
    } else if (!updatedCompanyCoverPhoto && !updatedCompanyLogo) {
      payload = {
        name,
        website,
        industry,
        benefits,
        specialities,
        type,
        about,
        headquatar,
      };
    }

    try {
      const docRef = doc(db, `companies/${myCompanyDetails?.id}`);
      const data = await updateDoc(docRef, payload);
      setLoading(false);
      toast.success("details updated successfully");
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <Box sx={{ width: "100vw", minHeight: "90vh" }}>
        <Loading width={40} height={40} color="#4045db" />
      </Box>
    );
  }
  return (
    <Box sx={{ width: "100vw", minHeight: "100vh" }}>
      <Container
        maxWidth="md"
        sx={{ border: "1px solid rgba(0,0,0,.1)", padding: "20px 0" }}
      >
        <ImageBox
          change={change}
          setCompanyLogo={setCompanyLogo}
          setCompanyCoverPhoto={setCompanyCoverPhoto}
          companyLogo={companyLogo}
          companyCoverPhoto={companyCoverPhoto}
          coverPhoto={myCompanyDetails?.coverPhoto}
          companyProfile={myCompanyDetails?.companyProfile}
        />
        <CompanyInfo
          {...details}
          setChange={setChange}
          change={change}
          onChange={onChange}
          id={myCompanyDetails && myCompanyDetails?.id}
        />
        <TextField {...details} onChange={onChange} change={change} />
        {change && (
          <Button
            sx={{
              marginTop: "50px",
              backgroundColor: "#4045db",
              padding: "5px 28px",
            }}
            onClick={async (e) => {
              await updateCompanyDetails();
              setOriginalMode(true);
              setChange(false);
            }}
            variant="contained"
            disabled={loading}
          >
            {loading ? "loading.." : "save changes"}
          </Button>
        )}

        {originalMode && (
          <Button
            variant="contained"
            onClick={() => {
              setOriginalMode(false);
              setChange(true);
            }}
            sx={{
              marginTop: "50px",
              backgroundColor: "#4045db",
              padding: "5px 28px",
            }}
          >
            edit details
          </Button>
        )}
        {change && (
          <Button
            sx={{
              marginTop: "50px",

              padding: "5px 28px",
              marginLeft: "20px",
            }}
            variant="outlined"
            onClick={() => {
              setOriginalMode(true);
              setChange(false);
            }}
          >
            cancel
          </Button>
        )}
      </Container>
    </Box>
  );
};

export default CompanyProfile;

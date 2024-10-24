// AddTestimony.jsx
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../backend/firebase";
import {
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  Alert,
} from "@mui/material";
import GoogleButton from "react-google-button";

import { signIn } from "../backend/firebase";

export const AddTestimony = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [message, setMessage] = useState("");
  const [relation, setRelation] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Function to generate a random image URL
  const generateRandom = () => {
    const randomNumber = Math.floor(Math.random() * 40) + 1;
    const genderArray = ["men", "women"];
    const randomGender =
      genderArray[Math.floor(Math.random() * genderArray.length)];
    return `https://randomuser.me/api/portraits/${randomGender}/${randomNumber}.jpg`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imgUrl = photoURL;

    if (!photoURL) {
      imgUrl = generateRandom();
    }

  console.log("Image URL being used:", imgUrl);

    try {
      // Add a new document to the "testimonies" collection
      await addDoc(collection(db, "testimonies"), {
        name,
        message,
        relation,
        time: new Date(), // Adds the current timestamp
        img: imgUrl,
      });

      console.log("Document successfully written!");
      setName(""); // Clear the form after submission
      setMessage("");
      setRelation("");
      setSuccess(true); // Show success message
      setError(null); // Clear any previous errors

      window.location.reload();
    } catch (error) {
      console.error("Error adding document: ", error);
      setError("Failed to add testimonial. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        maxWidth: 600,
        margin: "auto",
        padding: 4,
        marginTop: 4,
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <h1 className="centered-text">Add Testimonial</h1>

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Testimonial added successfully!
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Name and Relation Fields */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Relation"
              variant="outlined"
              fullWidth
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              required
            />
          </Grid>

          {/* Message Field */}
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              minRows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              Add Testimonial
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 2, // Optional: Adds some space between the form and the Google button
        }}
      >
        <GoogleButton onClick={() => signIn(setName, setPhotoURL)} />
      </Box>

    </Box>

    
  );
};

import React, { useState } from "react";
import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    Link,
    Paper,
    TextField,
    Typography,
    InputAdornment,
    IconButton,
} from "@mui/material";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignupPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const validate = () => {
        let tempErrors = {
            fullName: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        };

        //fullname validation
        if (!/^[a-z]{4,}$/.test(formData.fullName)) {
            tempErrors.fullName =
                "Full name must contain minimum 4 characters";
        }

        tempErrors.fullName =
            "Full name must contain only lowercase letters and minimum 4 characters";

        // Email Validation
        if (!/\S+@\S+\.\S+/.test(formData.email)) {

            tempErrors.email = "Enter valid email";
        }

        // Username Validation
        if (
            !/^(?=.*[0-9])(?=.*[@])[A-Za-z0-9@]{6,}$/.test(formData.username)
        ) {
            tempErrors.username =
                "Username must contain @ and at least one number";
        }

        // Password Validation
        if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
                formData.password
            )
        ) {
            tempErrors.password =
                "Password must contain uppercase, lowercase, number & special character";
        }

        // Confirm Password
        if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(tempErrors);

        return Object.values(tempErrors).every((x) => x === "");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            alert("Signup Successful!");
            console.log(formData);
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper
                elevation={4}
                sx={{
                    padding: 4,
                    marginTop: 8,
                    borderRadius: 3,
                }}
            >
                <Avatar
                    sx={{
                        mx: "auto",
                        bgcolor: "primary.main",
                        mb: 2,
                    }}
                >
                    <PersonAddAlt1Icon />
                </Avatar>

                <Typography variant="h5" align="center" gutterBottom>
                    Create Account
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                    <TextField
                        fullWidth
                        label="Full Name"
                        name="fullName"
                        margin="normal"
                        value={formData.fullName}
                        onChange={handleChange}
                        error={Boolean(errors.fullName)}
                        helperText={errors.fullName}
                    />

                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        margin="normal"
                        value={formData.email}
                        onChange={handleChange}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                    />

                    <TextField
                        fullWidth
                        label="Username"
                        name="username"
                        margin="normal"
                        value={formData.username}
                        onChange={handleChange}
                        error={Boolean(errors.username)}
                        helperText={errors.username}
                    />

                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        margin="normal"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />

                    <TextField
                        fullWidth
                        label="Confirm Password"
                        name="confirmPassword"
                        margin="normal"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        error={Boolean(errors.confirmPassword)}
                        helperText={errors.confirmPassword}
                    />

                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            padding: 1.2,
                        }}
                    >
                        Sign Up
                    </Button>

                    <Grid container sx={{ justifyContent: "center" }}>
                        <Grid>
                            <Typography variant="body2">
                                Already have an account?{" "}
                                <Link href="#" underline="hover">
                                    Login
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
};

export default SignupPage;
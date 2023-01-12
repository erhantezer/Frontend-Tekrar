import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { LoadingButton } from '@mui/lab';
import CssBaseline from '@mui/material/CssBaseline';
import { Form, Formik} from 'formik';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';



const theme = createTheme();


const loginSchema = Yup.object().shape({
    email: Yup
    .string("Please enter valid email")
    .email("Please  enter an email"),
    password: Yup
    .string()
    .required("Please enter a password")
    .min(6, "Password must have min 6 chars")
    .max(16, "Password must have max 16 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have an uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});

export default function Login() {



    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '93.2vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={6}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            
                        }}
                    >
                        <Avatar  sx={{ m: 1, width:"50px",height:"50px" }}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5" sx={{marginBottom:"10px"}}>
                            Login
                        </Typography>

                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={loginSchema}
                            onSubmit={(values, { actions }) => {
                            }}
                        >

                        {({
                        values, 
                        handleChange, 
                        handleBlur,
                        errors,
                        touched,
                        }) => (
                            <Form>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                    <TextField
                                    label="Email"
                                    name='email'
                                    id="email"
                                    type="email"
                                    variant="outlined"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                    sx={{ width: 400 }}
                                    />

                                    <TextField
                                    label="Password"
                                    name='password'
                                    id="password"
                                    type="password"
                                    variant="outlined"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                    />

                                    <LoadingButton
                                    type='submit'
                                    loading={false}
                                    loadingPosition="center"
                                    variant="contained"
                                    >
                                        Submit
                                    </LoadingButton>
                                    
                                </Box>
                            </Form>
                        )}
                        </Formik>
                        <Box sx={{ textAlign: "center", mt: 2 }}>
                            <Link to="/register">Do you have not an account?</Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
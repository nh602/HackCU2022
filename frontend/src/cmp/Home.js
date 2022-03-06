import { Typography, Box, Paper } from "@mui/material";
// import { useState } from 'react';
import Login from "./Login";


const Home = () => {


    return (
        <div className="home page">
            <Typography variant="h2" className="page-title">Home Page</Typography>
            <Paper className="page-body" elevation={1} >
                <Typography paragraph={true} align="center">
                    Consequuntur eveniet ut aut. Velit qui quibusdam rem corporis fugit. Id cumque aut eum distinctio mollitia.

                    Ut et earum perspiciatis accusantium voluptate voluptate sed veniam. Fugiat dolorem animi ut praesentium unde quos. Suscipit quis accusantium provident. Quis ipsum saepe voluptatem accusamus explicabo.

                    Excepturi at deleniti nihil qui architecto amet. Facere quod nostrum velit a doloribus aut autem. Quae vel occaecati porro quia. Quis tempore ullam atque consequatur voluptate. Voluptatibus dignissimos vero veniam magnam dignissimos.

                    Ut animi laudantium dolor assumenda non soluta. Sint voluptatem sit repellendus. Rerum aut magnam voluptatem dolores dignissimos eligendi eaque quaerat. Pariatur excepturi et hic nulla hic velit eos debitis.

                    Ipsa ut et cum. Est eius ratione corrupti delectus odio. Et nihil dolore ut ipsam ut quasi harum. Quia fuga perferendis aliquid. Quibusdam minima unde officiis.
                </Typography>
            </Paper>
            <Login /> 
        </div>
    );
}


export default Home;
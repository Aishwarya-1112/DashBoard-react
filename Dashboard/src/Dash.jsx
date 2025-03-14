import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Card, CardContent, Typography } from "@mui/material";
const Dash = () => {
  return (
    <div>
      <div>
        <Card
          sx={{
            width: "20%",
            "@media (min-width:600px)": {
              // For screens 600px and above
              width: "50%",
            },
          }}
        >
          <CardContent>
            <Typography>Hello world</Typography>
          </CardContent>
        </Card>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        ></Box>
        <Paper />
      </div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ad
      temporibus ut culpa enim a nam porro ex, odio, hic, cumque consequuntur
      odit consectetur eius dolorum. Vero voluptatibus rerum dolore eligendi
      minima alias ipsam dolorem tenetur quod corrupti, consectetur iste
      accusamus laborum perferendis neque id quidem repellendus possimus
      cupiditate cum at illo recusandae! Dolore, adipisci! Ex, impedit molestias
      perferendis esse facilis voluptatem cum, molestiae ipsum minus autem
      quisquam modi placeat, qui excepturi. Maiores corrupti est quibusdam
      vitae, ex ut, suscipit dolor recusandae tempore rerum nihil nobis neque
      laborum nesciunt! Molestias maiores tenetur aspernatur vel illum. Quis a
      animi magnam voluptas sequi corporis nemo deserunt minus saepe
      exercitationem laborum modi, nulla rerum asperiores iste ratione ut
      dolores voluptates facilis optio. Qui, sunt vel. Aspernatur animi quas
      sed, necessitatibus, vel at voluptas hic explicabo quidem incidunt illo
      id, officiis cumque corporis! Iste aut vero corporis doloremque dolores
      tenetur quaerat, ipsam a, perspiciatis voluptates cumque exercitationem
      debitis vel molestias distinctio? Sint eos inventore non? Quibusdam amet,
      ipsa aperiam omnis, facere ea possimus libero voluptate placeat accusamus
      impedit dolorem. Laudantium ratione odit eaque doloribus, aperiam libero,
      temporibus illo unde nesciunt maxime magnam accusantium eum expedita
      velit? Quidem libero recusandae velit quo cum sint ducimus.
    </div>
  );
};

export default Dash;

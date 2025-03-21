import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import {
  ShoppingCart,
  LocalMall,
  People,
  Settings,
  NaturePeople,
} from "@mui/icons-material";

const cards = [
  {
    id: 1,
    title: "Orders",
    description: "Plants are essential for all life.",
    icon: <ShoppingCart />,
  },
  {
    id: 2,
    title: "Products",
    description: "Animals are a part of nature.",
    icon: <LocalMall />,
  },
  {
    id: 3,
    title: "Users",
    description: "Humans depend on plants and animals for survival.",
    icon: <People />,
  },
  {
    id: 4,
    title: "Settings",
    description: "Animals are a part of nature.",
    icon: <Settings />,
  },
  {
    id: 5,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
    icon: <NaturePeople />,
  },
  //   {
  //     id: 6,
  //     title: "Humans",
  //     description: "Humans depend on plants and animals for survival.",
  //     icon: <NaturePeople />,
  //   },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
          gap: 2,
          "@media (max-width: 768px)": {
            display: "block",
            pl: "27px",
            pb: "20px",
            mb: "5px",
            width: "20%",
            gap: 5,
          },
        }}
      >
        {cards.map((card, index) => (
          <Card key={card.id}>
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? "" : undefined}
              sx={{
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  ml: "4",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                    // height: "100px",
                  },
                },
              }}
            >
              <CardContent
                sx={{
                  height: "auto",
                  display: "flex",
                  alignItems: "center",
                  color: "#64ccf3",
                  width: "90%",
                  ml: "3",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ marginRight: 2 }}>{card.icon}</Box>
                  <Typography
                    variant="h5"
                    component="div"
                  >
                    {card.title}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0",
            gap: "4",
            "@media (max-width: 768px)": { display: "block", p: "0", m: "2" },
          }}
        >
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={500}
            height={300}
          />
          <LineChart
            series={[
              { curve: "natural", data: [0, 5, 2, 6, 3, 9.3] },
              { curve: "natural", data: [6, 3, 7, 9.5, 4, 2] },
            ]}
            width={500}
            height={300}
          />
        </Box>

        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: ["group A", "group B", "group C", "group D", "group E"],
            },
          ]}
          series={[
            { data: [4, 3, 5, 2, 1] },
            { data: [1, 6, 3, 4, 2] },
            { data: [2, 5, 6, 3, 4] },
            { data: [5, 7, 6, 8, 5] },
            { data: [8, 6, 5, 7, 6] },
          ]}
          width={1200}
          height={300}
          barLabel="value"
        />
      </Box>
    </>
  );
}

export default SelectActionCard;

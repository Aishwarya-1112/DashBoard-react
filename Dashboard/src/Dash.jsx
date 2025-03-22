import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { PieChart } from "@mui/x-charts/PieChart";
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
            flexDirection: "row",
            pl: "27px",
            pb: "20px",
            mb: "5px",
            width: "20%",

            alignItems: "center",
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
      <Box
        sx={{
          display: "block",
          alignItems: "baseline",
          flexDirection: "row",
        }}
      >
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

      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",

            "@media (max-width: 768px)": {
              display: "block",
              alignItems: "center",
              maxWidth: "150px", // Shrink chart width on smaller screens
              height: "200px",
              flexDirection: "row",
            },
          }}
        >
          {/* First Chart Container with Responsive Design */}
          <div style={{ width: "100%", maxWidth: "500px" }}>
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
          </div>

          {/* Second Chart Container */}
          <div style={{ width: "100%", maxWidth: "500px" }}>
            <LineChart
              series={[
                { curve: "natural", data: [0, 5, 2, 6, 3, 9.3] },
                { curve: "natural", data: [6, 3, 7, 9.5, 4, 2] },
              ]}
              width={500}
              height={300}
            />
          </div>

          {/* Pie Chart */}
          <div
            style={{
              display: "block",
              width: "200px",
              maxWidth: "500px",
            }}
          >
            {/* <PieChart
              series={[
                {
                  data: [{ value: 10 }, { value: 20 }],
                  innerRadius: 30,
                  outerRadius: 100,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: -45,
                  endAngle: 225,
                  cx: 150,
                  cy: 150,
                  // Optional label styling
                  label: {
                    position: "outside", // Label position can be inside or outside
                    offset: 10, // Label offset
                  },
                  labelLine: {
                    strokeWidth: 2, // Width of the line connecting the labels to the chart
                    length: 15, // Length of the line
                  },
                },
              ]}
              width={200} // Ensure width is provided
              height={300} // Ensure height is provided
            /> */}
          </div>
        </Box>
      </Box>
    </>
  );
}

export default SelectActionCard;

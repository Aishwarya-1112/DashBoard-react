import * as React from "react";
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
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        height: "80%",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
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
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent
              sx={{ height: "100%", display: "flex", alignItems: "center" }}
            >
              {/* Adding Icon and Text for each card */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ marginRight: 2 }}>
                  {card.icon} {/* Icon displayed next to title */}
                </Box>
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
  );
}

export default SelectActionCard;

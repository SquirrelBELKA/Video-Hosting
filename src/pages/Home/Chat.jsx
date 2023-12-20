import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";


const colorb = '#232323';





const messages = [
  { id: 1, text: "Замечательное видео! Очень понравилось, продолжай в том же духе!", sender: "bot" },
  { id: 2, text: "Я не ожидал, что будет так интересно!", sender: "bot" },
  { id: 3, text: "Как круто!", sender: "bot" },
  { id: 4, text: "Как круто!", sender: "bot" },
  {id: 5, text: "Cпасибо за комментарии, буду стараться еще лучше!!", sender: "bot1" },
  { id: 6, text: "Как круто!", sender: "bot" },
  { id: 7, text: "Как круто!", sender: "bot" },
  { id: 8, text: "Как круто!", sender: "bot" },
  {id: 9, text: "Cпасибо за комментарии, буду стараться еще лучше!!", sender: "bot1" },
  { id: 10, text: "Как круто!", sender: "bot" },
  { id: 11, text: "Продолжай в том же духе!", sender: "bot" },
  { id: 12, text: "Как круто!", sender: "bot" },
  { id: 13, text: "Как круто!", sender: "bot" },
  { id: 14, text: "Очень познавательно!"	,sender: "bot" },
 
  
];

const ChatUI = () => {
  const [input, setInput] = React.useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      console.log(input);
      setInput("");
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: '#232323',
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((message) => (
          <Message key={message.id} message={message}  />
        ))}
      </Box>
      <Box sx={{ p: 2, backgroundColor: '#232323' }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <TextField
            
              size="small"
              fullWidth
              placeholder="Напиши комментарии под видео"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              
              variant="contained"
              endIcon={<SendIcon sx={{ color: '#FAFAFA' }}/>}
              onClick={handleSend}

              
            >
              Отправить
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Message = ({ message }) => {
  const isBot = message.sender === "bot";
  const isBot1 = message.sender === "bot1";
  const isBot2 = message.sender === "bot2";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
        mb: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isBot ? "row" : "row-reverse",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: isBot ? "232323" : "secondary.main" }}>
          {isBot ? "M" : "N"}
        </Avatar>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            ml: isBot ? 1 : 0,
            mr: isBot ? 0 : 1,
            backgroundColor: isBot ? "232323" : "secondary.light",
            borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
          }}
        >
          <Typography variant="body1">{message.text}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatUI;
import React, { useState } from 'react';
import axios from 'axios'; // Import axios nếu cần thiết sau này
import '../../assets/css/Chatbot.css'; // Import CSS để định dạng giao diện

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng chatbot
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I assist you today?' },
  ]); // Lưu trữ lịch sử tin nhắn
  const [userInput, setUserInput] = useState(''); // Nội dung người dùng nhập

  // Danh sách câu hỏi và câu trả lời vu vơ về nhà hàng
  const faq = {
    "what are your opening hours": "We are open from 8 AM to 11 PM, but you must book a table in advance.",
    "how can i book a table": "You can click on the 'Book my table' button to make a reservation.",
    "how can i contact you": "You can contact us via email at huge4x7@gmail.com.",
    "what is the dress code": "Our dress code is casual, but please avoid wearing beachwear or sports clothes.",
    "do you have vegetarian options": "Yes, we have a variety of vegetarian dishes on our menu.",
    "can i bring my pet": "Pets are welcome in our outdoor seating area, but not indoors.",
    "do you offer takeout": "Yes, we offer takeout for most of our menu items. Just call us to place an order.",
    "do you have parking": "Yes, we have a parking lot available for our customers.",
    "what type of cuisine do you serve": "We serve a mix of Asian and Western dishes, with a focus on fresh, local ingredients.",
  };

  // Hàm xử lý gửi tin nhắn
  const handleSend = async () => {
    if (!userInput.trim()) return;

    // Thêm tin nhắn người dùng
    setMessages([...messages, { sender: 'user', text: userInput }]);

    // Loại bỏ dấu hỏi và chuyển đổi sang chữ thường để so sánh
    const formattedInput = userInput.trim().toLowerCase().replace(/[?]/g, '');

    // Kiểm tra câu hỏi của người dùng và trả lời từ FAQ
    const faqReply = faq[formattedInput];

    let reply;
    if (faqReply) {
      reply = faqReply; // Trả lời từ FAQ nếu có
    } else {
      // Nếu không có trong FAQ, trả lời chung chung
      reply = "Sorry, I didn't understand your question. Please ask something else.";
    }

    // Thêm câu trả lời của bot
    setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);

    // Xóa nội dung nhập
    setUserInput('');
  };

  return (
    <div className="chatbot-container">
      {/* Nút mở/đóng chatbot */}
      {!isOpen && (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          Chat
        </button>
      )}

      {/* Khung chat */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Chat Assistant</span>
            <button onClick={() => setIsOpen(false)} className="chatbot-close">×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.sender === 'user' ? 'user' : 'bot'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

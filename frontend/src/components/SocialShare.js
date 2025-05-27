import React from "react";
import { motion } from "framer-motion";
import { 
  FaTwitter, 
  FaFacebook, 
  FaLinkedin, 
  FaWhatsapp, 
  FaReddit,
  FaShare 
} from "react-icons/fa";

const SocialShare = ({ url, title, className = "" }) => {
  const currentUrl = url || window.location.href;
  const shareTitle = title || "Fund the Kaveri Engine - Make India Self Reliant";
  
  const shareButtons = [
    {
      name: "Twitter",
      icon: FaTwitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}&hashtags=FundKaveriEngine,MakeInIndia`,
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      color: "hover:text-blue-600",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      color: "hover:text-blue-700",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: `https://wa.me/?text=${encodeURIComponent(shareTitle + " " + currentUrl)}`,
      color: "hover:text-green-500",
    },
    {
      name: "Reddit",
      icon: FaReddit,
      url: `https://www.reddit.com/submit?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(shareTitle)}`,
      color: "hover:text-orange-500",
    },
  ];

  const handleShare = (shareUrl) => {
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          url: currentUrl,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    }
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <span className="text-sm font-medium text-gray-600">Share:</span>
      <div className="flex space-x-3">
        {shareButtons.map((button) => (
          <motion.button
            key={button.name}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleShare(button.url)}
            className={`p-2 rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-gray-200 ${button.color}`}
            title={`Share on ${button.name}`}
          >
            <button.icon size={16} />
          </motion.button>
        ))}
        
        {navigator.share && (
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNativeShare}
            className="p-2 rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-gray-200 hover:text-gray-800"
            title="Share"
          >
            <FaShare size={16} />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default SocialShare;
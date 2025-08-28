// EmailJS Configuration
export const EMAILJS_CONFIG = {
    // EmailJS credentials from Footer component
    PUBLIC_KEY: "9ymWe83u9mvZDcgpC",
    SERVICE_ID: "service_gu19c0w", 
    TEMPLATE_ID: "template_i977fnp",
    
    // Email template parameters mapping
    TEMPLATE_PARAMS: {
      from_name: "from_name",
      from_email: "from_email", 
      phone_number: "phone_number",
      purpose: "purpose",
      message: "message",
      to_name: "to_name"
    }
  };
  
  // EmailJS initialization function
  export const initEmailJS = () => {
    if (typeof window !== 'undefined') {
      // Import emailjs dynamically for browser compatibility
      import('@emailjs/browser').then(({ init }) => {
        init(EMAILJS_CONFIG.PUBLIC_KEY);
      });
    }
  };
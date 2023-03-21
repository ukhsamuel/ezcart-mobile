import http from "../http";
// import http from '../';
import { theme, images } from "../constants";
// import { format } from "date-fns";
import moment from "moment";

export const formatDate = (str, mode = "normal") => {
    if(mode == 'normal'){
        return moment(str).format("HH:mm D/MM/YY"); 
    }
    return moment(str).format("HH:mm D/MM/YY"); 
};

const calculateAverage = (arr) =>{
  return arr.reduce((a, {average}) => a + average, 0) / arr.length;
}

export const returnCurrencySymbol = (curr) =>{
    if(curr == "NGN"){
      return "₦"
    }else if (curr == "USD"){
      return "$"
    }else{
      return "₦"
    }
  }

  export const  showToast = (response, message, title) =>{
    // toast.show("Hello World");
    toast.show(message, {
        type: response.type || 'normal',
        placement: "top",
        duration: 3000,
        offsetTop: 200,
        animationType: "zoom-in",
      });

  }
  
export const returnRewardTypeImg = (type) => {
  if (type == "Airtime") {
    return images.sim;
  } else if (type == "Merchandize") {
    return images.merch;
  } else if (type == "Loyalty") {
    return images.gold;
  } else if (type == "Raffle") {
    return images.raffle;
  } else {
    return images.gold;
  }
};

const UtilityService = {
  returnRewardTypeImg,
  formatDate,
  returnCurrencySymbol,
  calculateAverage,
  showToast
};

export default UtilityService;

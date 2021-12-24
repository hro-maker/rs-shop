import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faTty } from "@fortawesome/free-solid-svg-icons";

export const menuArr=[
  {
    icon:faTelegram,
    content:'Telegram',
    href:'https://t.me/therollingscopes',
    class:"telegram"
  },
  {
    icon:faTty,
    content:'+375 17 302 10 21',
    href:'tel:+375173021021',
    class:"tel"
  },
  {
    icon:faEnvelope,
    content:'Email',
    href:'mailto:tamar.ratiani@gmail.com',
    class:"email"
  }
]

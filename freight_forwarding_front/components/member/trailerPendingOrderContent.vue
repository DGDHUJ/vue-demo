<style scoped lang="scss">
.pendingBookingOrdercontent {
  background: white;
  min-height: 600px;
  padding: 20px;
  .title {
    overflow: hidden;
    img {
      float: left;
    }
    p {
      height: 25px;
      line-height: 24px;
      font-size: 1rem;
      margin: 0 0 0 30px;
      font-weight: 600;
      color: black;
    }
  }
  .item {
    padding: 20px 0 0 0;
    .port {
      font-size: 0.93rem;
      padding: 0 0 10px 0;
      p {
        display: inline-block;
        min-width: 100px;
      }
      span {
      }
    }
    .chuandong {
      .grid-content {
        font-size: 0.93rem;
        padding: 0 0 10px 0;
        p {
          display: inline-block;
          min-width: 100px;
        }
        span {
        }
      }
    }
    .product-details {
      display: flex;
      font-size: 0.93rem;
      padding: 0 0 10px 0;
      .title {
        min-width: 100px;
        line-height: 40px;
      }
      .product-details-items {
        .product-details-content {
          font-size: 0.93rem;
          margin-bottom: 10px;
          p {
            display: inline-block;
            line-height: 40px;
            min-width: 100px;
          }
          span:first-of-type {
            padding-right: 10px;
          }
          .el-input {
            position: relative;
            margin-right: 10px;
            display: inline-block;
            width: 80px;
          }
        }
      }
    }
    .contact {
      // display:flex ;
      font-size: 0.93rem;
      padding: 0 0 10px 0;
      p {
        min-width: 100px;
        line-height: 40px;
      }
      .contact-form {
        width: 100%;
        .grid-content {
          position: relative;
          .star {
            position: absolute;
            left: 0;
            z-index: 88;
            top: 14px;
            color: red;
          }
          .el-input {
            width: 90%;
            margin-left: 15px;
          }
        }
      }
    }
    .box-attribute {
      display: flex;
      font-size: 0.93rem;
      padding: 0 0 10px 0;
      p {
        min-width: 100px;
        line-height: 40px;
      }
      .el-select {
        margin-left: 15px;
      }
    }
    .characteristics {
      display: flex;
      font-size: 0.93rem;
      padding: 0 0 10px 0;
      p {
        min-width: 100px;
        line-height: 40px;
      }
      .el-select {
        margin-left: 15px;
      }
      .el-input {
        margin-left: 63px;
        width: 50%;
      }
    }
    .scn {
      padding: 0 0 10px 0;
      .grid-content {
        display: flex;
        p {
          min-width: 100px;
        }
        span {
          color: red;
        }
        .el-textarea {
          width: 55%;
          margin-left: 10px;
        }
      }
    }
    .orderInfo {
      display: flex;
      padding: 0 0 10px 0;
      font-size: 0.93rem;
      p {
        min-width: 100px;
        line-height: 40px;
      }
      .orderInfo-form {
        width: 100%;
        .grid-content {
          position: relative;
          .star {
            position: absolute;
            left: 0;
            z-index: 88;
            top: 14px;
            color: red;
          }
          .el-select {
            margin-left: 15px;
          }
          .el-input {
            margin-left: 15px;
            width: 80.5%;
          }
        }
      }
    }
    .goodsInfo {
      display: flex;
      padding: 0 0 10px 0;
      font-size: 0.93rem;
      p {
        min-width: 100px;
        line-height: 40px;
      }
      .goodsInfo-form {
        width: 100%;
        .grid-content {
          position: relative;
          .ties {
            margin-left: 10px;
          }
          .el-input {
            margin-left: 15px;
            width: 80.5%;
          }
          .el-input:last-of-type {
            width: 65%;
          }
          .el-input:nth-of-type(3) {
            width: 65%;
          }
        }
      }
    }
    .description {
      padding: 0 0 10px 0;
      font-size: 0.93rem;
      overflow: hidden;
      span{
        float: left;
        width: 100px;
      }
      .el-textarea {
        float: left;
        width: calc(50%-200px);
        margin: 0 100px 0 0;
      }
    }
    
  }
}
.trailerpendingOrdercontent {
  background: white;
  padding: 20px;
  margin-top: 20px;
  .title {
    overflow: hidden;
    img {
      float: left;
    }
    p {
      height: 25px;
      line-height: 24px;
      font-size: 1rem;
      margin: 0 0 0 30px;
      font-weight: 600;
      color: black;
    }
  }
  .item {
    padding: 20px 0 0 0;
    .port {
      font-size: 0.93rem;
      padding: 0 0 10px 0;
      p {
        display: inline-block;
        min-width: 100px;
      }
    }
  }
}
.trailerpendingOrdercontent1 {
  background: white;
  padding: 20px;
  margin-top: 20px;
  .title {
    overflow: hidden;
    img {
      float: left;
    }
    p {
      height: 25px;
      line-height: 24px;
      font-size: 1rem;
      margin: 0 0 0 30px;
      font-weight: 600;
      color: black;
      span {
        font-size: 0.93rem;
        color: #a9a9a9;
      }
    }
  }
  .item {
    padding: 20px 0 0 0;
    .item-radio {
      font-size: 0.93rem;
      padding: 0 0 10px 0;
      p {
        display: inline-block;
        min-width: 100px;
      }
      .el-radio {
        min-width: 100px;
      }
    }
    .upload {
      overflow: hidden;
      padding: 0 0 10px 0;
      font-size: 0.93rem;
      .star {
        float: left;
        color: red;
        line-height: 40px;
      }
      p {
        float: left;
        min-width: 100px;
        line-height: 40px;
      }
      .el-button {
        float: left;
        background: #4a3f91;
        color: white;
      }
      .ui_button {
        border-radius: 5px;
        display: inline-block;
        line-height: 40px;
        padding: 0 40px;
        color: white;
        font-weight: 700;
        cursor: pointer;
      }
      .ui_button_primary {
        background: #4a3f91;
        color: white;
      }
      label.ui_button:hover {
        background: #4a3f91;
        color: white;
      }
    }
    .dingcangcode {
      overflow: hidden;
      padding: 0 0 10px 0;
      font-size: 0.93rem;
      .star {
        float: left;
        color: red;
        line-height: 40px;
      }
      p {
        float: left;
        min-width: 100px;
        line-height: 40px;
      }
      .el-input {
        float: left;
        width: 28%;
        margin-left: 10px;
      }
    }
  }
}
.trailerpendingOrdercontent2 {
  background: white;
  padding: 20px;
  margin-top: 20px;
  .title {
    overflow: hidden;
    img {
      float: left;
    }
    p {
      height: 25px;
      line-height: 24px;
      font-size: 1rem;
      margin: 0 0 0 40px;
      font-weight: 600;
      color: black;
    }
  }
  .item {
    padding: 20px 0 0 0;
    .port {
      font-size: 0.93rem;
      padding: 0 0 10px 0;
      p {
        min-width: 100px;
        display: inline-block;
      }
    }
    .address {
      display: flex;
      font-size: 1rem;
      padding: 0 0 10px 0;
      .star {
        color: red;
      }
      .address-title {
        padding: 10px 0;
        p {
          min-width: 100px;
          line-height: 40px;
          color: #4a3f91;
        }
      }
      .address-form {
        width: 100%;
        padding: 10px;
        .address-details {
          line-height: 40px;
          .title {
            min-width: 100px;
          }
        }
        .address-note {
          line-height: 40px;
        }
        .address-contact {
          line-height: 40px;
        }
        .address-time {
          display: flex;
          line-height: 40px;
          .item-title {
            min-width: 100px;
          }
          .time-year {
            margin-right: 10px;
          }
        }
      }
    }
    .lastest-time {
      display: flex;
      line-height: 40px;
      font-size: 0.93rem;
      padding: 0 0 10px 0;
      p {
        min-width: 100px;
        display: inline-block;
      }
      .el-input__prefix {
        left: unset;
        right: -55px;
      }
      .el-input {
        display: inline-block;
        width: 50px;
        margin: 0 10px;
      }
      .el-date-editor {
        display: inline-block;
        width: 150px;
      }
      .open-time {
        width: 50%;
        display: inline-block;
        .el-date-editor {
          width: 52%;
        }
      }
      .close-time {
        width: 50%;
        display: inline-block;
        .el-date-editor {
          width: 52%;
        }
      }
    }
    .po-code {
      overflow: hidden;
      padding: 0 0 10px 0;
      font-size: 0.93rem;
      p {
        float: left;
        min-width: 100px;
        line-height: 40px;
      }
      .el-input {
        float: left;
        width: 26%;
        margin-left: 10px;
      }
    }
    .VGM-code {
      overflow: hidden;
      padding: 0 0 10px 0;
      font-size: 0.93rem;
      p {
        float: left;
        min-width: 100px;
        line-height: 40px;
      }
      .el-select {
        float: left;
        margin-left: 10px;
        width: 26%;
      }
    }
    .position-code {
      overflow: hidden;
      padding: 0 0 10px 0;
      font-size: 0.93rem;
      p {
        float: left;
        min-width: 100px;
        line-height: 40px;
      }
      span {
        float: left;
        color: red;
      }
      .el-select {
        float: left;
        width: 26%;
      }
    }
    .twoarea-code {
      display: flex;
      padding: 0 0 10px 0;
      font-size: 0.93rem;
      div {
        width: 50%;
      }
      div:nth-of-type(1) {
        display: flex;
        p {
          min-width: 100px;
          line-height: 40px;
        }
        .el-select {
          margin-left: 10px;
          width: 52%;
        }
      }
    }
    .notes {
      overflow: hidden;
      padding: 0 0 10px 0;
      font-size: 0.93rem;
      p {
        min-width: 100px;
        line-height: 40px;
        float: left;
      }
      .notes-content {
        overflow: hidden;
        float: left;
        width: calc(100%-100px);
        .notes-textarea {
          float: left;
          width: 35%;
          margin: 0 40px 0 10px;
        }
        .notes-select {
          float: left;
          width: 55%;
          .grid-content {
            cursor: pointer;
            border: 1px solid #ddd;
            margin: 0px 0 8px 0;
          }
        }
      }
    }
    .clearance {
      padding: 0 0 10px 0;
      font-size: 0.93rem;
      .grid-content {
        i {
          font-size: 25px;
          color: #4a3f91;
        }
        .clearance-title {
          font-size: 1.2rem;
          font-weight: 600;
        }
        .clearance-adress {
          margin-left: 32px;
          font-size: 1rem;
          padding: 10px 0;
        }
      }
    }
  }
}
.lianxiInfo {
  background: white;
  padding: 20px;
  margin-top: 20px;
  .title {
    overflow: hidden;
    img {
      float: left;
    }
    p {
      height: 25px;
      line-height: 24px;
      font-size: 1rem;
      margin: 0 0 0 40px;
      font-weight: 600;
      color: black;
    }
  }
  .item {
    padding: 20px 0 0 0;
    .lianxi-name {
      display: flex;
      padding: 0 0 10px 0;
      font-size: 0.93rem;
      p {
        min-width: 100px;
        line-height: 40px;
      }
      .el-input {
        width: 26%;
        margin-left: 10px;
      }
    }
    .beiyong {
      .beiyong-item {
        width: 35.5%;
        .grid-content {
          display: flex;
          padding: 0 0 10px 0;
          font-size: 0.93rem;
          p {
            min-width: 100px;
            line-height: 40px;
          }
          .el-input {
            margin-left: 10px;
          }
        }
      }
      .item1 {
        margin-left: 40px;
      }
    }
  }
}
.baoguanInfo {
  background: white;
  padding: 20px;
  margin-top: 20px;
  .title {
    overflow: hidden;
    img {
      float: left;
    }
    p {
      height: 25px;
      line-height: 24px;
      font-size: 1.2rem;
      margin: 0 0 0 40px;
      font-weight: 600;
      color: black;
    }
  }
  .item {
    padding: 20px 0 0 0;
    .clearance {
      padding: 0 0 10px 0;
      font-size: 0.93rem;
      .grid-content {
        .clearance-title {
          margin-left: 32px;
          font-size: 1.2rem;
          font-weight: 600;
        }
        .clearance-adress {
          margin-left: 32px;
          font-size: 1rem;
          padding: 10px 0;
        }
      }
    }
  }
}
.baoguan-card {
  margin: 20px 0 20px 0;
  font-size: 0.93rem;
  .title {
    font-size: 18px;
    img {
      float: left;
      margin-top: -2px;
    }
    p {
      margin-left: 40px;
      font-weight: 600;
    }
  }
  .content {
    margin: 20px 0 20px 0;
    > div {
      margin-bottom: 10px;
    }
    .el-input {
      width: 220px;
      margin-left: 74px;
    }
    .el-select {
      width: 220px;
      margin-left: 34px;
    }
    textarea {
      width: 100%;
      height: 100px;
      resize: none;
      border-color: #dcdcdc;
    }
    textarea::-webkit-input-placeholder {
      color: #dadada;
    }
    textarea::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #dadada;
    }
    textarea:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #dadada;
    }
    textarea:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #dadada;
    }
    .el-date-editor {
      margin-left: 10px !important;
    }
    > div:nth-of-type(1) .el-input {
      margin-left: 46px !important;
    }
    > div:nth-of-type(3) .el-input {
      margin-left: 75px !important;
    }
    div:nth-of-type(4) {
      overflow: hidden;
      div:nth-of-type(1) {
        float: left;
        width: 300px;
      }
      div:nth-of-type(2) {
        float: left;
        width: 67%;
      }
    }
    .ce1 {
      div {
        display: inline-block;
        margin-left: 50px;
      }
    }
    .ce2 {
      div {
        display: inline-block;
        margin-left: 50px;
      }
    }
    .ce3 {
      div {
        display: inline-block;
        margin-left: 58px;
      }
    }
    .ce4 {
      div {
        display: inline-block;
        margin-left: 15px;
      }
    }
    .ce5 {
      div {
        display: inline-block;
        margin-left: 38px;
      }
    }

    > div:nth-of-type(5) .el-input,
    > div:nth-of-type(6) .el-input {
      margin-left: 32px !important;
    }
    > div:nth-of-type(10) .el-input {
      margin-left: 25px !important;
    }
    > div:nth-of-type(11) {
      overflow: hidden;
    }
    > div:nth-of-type(11) .left {
      width: 116px;
      float: left;
    }
    > div:nth-of-type(11) .right {
      width: 82%;
      float: left;
      textarea {
        padding: 10px;
      }
    }
    > div:nth-of-type(12) {
      overflow: hidden;
    }
    > div:nth-of-type(12) .left {
      width: 116px;
      float: left;
    }
    > div:nth-of-type(12) .right {
      width: 82%;
      float: left;
      span {
        line-height: 30px;
      }
      .shangchuanwenjian {
        display: inline-block;
        .ui_button {
          border-radius: 5px;
          display: inline-block;
          line-height: 40px;
          padding: 0 40px;
          color: white;
          font-weight: 700;
          cursor: pointer;
        }
        .ui_button_primary {
          background: #f08419;
          color: white;
        }
        label.ui_button:hover {
          background: #f08419;
          color: white;
        }
      }
    }
    button {
      width: 190px;
      height: 40px;
      border: 0px;
      background-color: #f08519;
      color: #fff;
      margin-top: 40px;
    }

    .fileinput-button {
      width: 90px;
      height: 90px;
      position: relative;
      display: inline-block;
      overflow: hidden;
      border: 0;
      background-color: #eeeeee;
      text-align: center;
      font-size: 48px;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    .fileinput-button input {
      position: absolute;
      width: 90px;
      height: 90px;
      left: 0px;
      top: 0px;
      opacity: 0;
      -ms-filter: "alpha(opacity=0)";
    }
    .file_text {
      position: relative;
      top: 26px;
      color: #999999;
    }
  }
}
.box-card_2 {
  margin: 20px 0 20px 0;
  .title {
    font-size: 18px;
    img {
      float: left;
      margin-top: -2px;
    }
    p {
      margin-left: 40px;
      font-weight: 600;
    }
  }
  .content {
    margin: 20px 0 20px 0;
    font-size: 0.93rem;
    > div {
      margin-bottom: 10px;
    }
    .el-input {
      width: 220px;
    }
    > div:nth-of-type(1) span:nth-of-type(2) {
      margin-left: 38px;
      color: red;
    }
    > div:nth-of-type(2) span:nth-of-type(2) {
      margin-left: 36px;
      color: red;
    }
    > div:nth-of-type(3) span:nth-of-type(2) {
      margin-left: 38px;
      color: red;
    }
    > div:nth-of-type(4) .el-input {
      margin-left: 26px;
    }
    > div:nth-of-type(5) .el-input {
      margin-left: 12px;
    }
    > div:nth-of-type(6) .el-input {
      margin-left: 32px;
    }
  }
}
.trailerpendingOrdercontent3 {
  background: white;
  padding: 20px 20px 60px 20px;
  margin-top: 20px;
  .title {
    overflow: hidden;
    img {
      float: left;
    }
    p {
      height: 25px;
      line-height: 24px;
      font-size: 1rem;
      margin: 0 0 0 40px;
      font-weight: 600;
      color: black;
    }
  }
  .item {
    .dingchuancount {
      font-size: 0.93rem;
      margin: 10px 0 0 0;
      .dingchuancount-title {
        color: #4a3f91;
        font-weight: 600;
      }
      .dingchuancount-content {
        margin: 10px 0 20px 0;
        .grid-content {
          margin: 0 0 10px 0;
        }
      }
    }
    .tuochecount {
      font-size: 0.93rem;
      margin: 10px 0 30px 0;
      border-bottom: 3px solid #e6e6e6;
      .tuochecount-title {
        color: #4a3f91;
        font-weight: 600;
      }
      .tuochecount-content {
        margin: 10px 0 20px 0;
        .grid-content {
          margin: 0 0 10px 0;
          .tuochefuwufee {
            display: flex;
            div:nth-of-type(1) {
              margin-right: 10px;
            }
            div:nth-of-type(2) {
              font-size: 0.93rem;
            }
          }
        }
      }
    }
    .count {
      .grid-content {
        font-size: 1rem;
        img {
          float: left;
        }
        p {
          height: 30px;
          line-height: 30px;
          margin-left: 40px;
          font-size: 1.2rem;
          font-weight: 600;
        }
        span {
          color: #f08619;
          font-weight: 600;
        }
      }
    }
  }
}

.okbtn {
  margin: 50px 0;
  text-align: center;
  overflow: hidden;
  line-height: 50px;
  height: 50px;
  .left-hr {
    float: left;
    width: 40%;
    margin-top: 25px;
    height: 1px;
  }
  .okbtn-btn {
    float: left;
    width: 200px;
    margin: 0 20px;
    background: #f08619;
    color: white;
    font-size: 1.2rem;
  }
  .right-hr {
    float: right;
    width: 40%;
    margin-top: 25px;
    height: 1px;
  }
}
.showMsg {
  margin: 0 auto 20px auto;
  background: white;
  padding: 20px;
  font-size: 0.93rem;
  p {
    line-height: 30px;
  }
  .showspan {
    margin-right: 30px;
  }
}
.showties {
  margin: 0px 0 30px 0;
  font-size: 0.93rem;
  .ties {
    line-height: 30px;
    .filedownload {
      color: #4a3f91;
      cursor: pointer;
    }
  }
  .tiesBtn {
    width: 290px;
  }
}
.sailInfo {
  overflow: hidden;
  font-size: 0.93rem;
  .Info-item {
    float: left;
    width: 33.33%;
    overflow: hidden;
    p {
      float: left;
      min-width: 100px;
    }
    .jiekai {
      margin: 0 0 0 20px;
    }
  }
}
.line-hr {
  margin: 25px 0;
}
//new
.contact {
  overflow: hidden;
  font-size: 0.93rem;
  line-height: 40px;
  .contactName {
    float: left;
    font-size: 0.93rem;
    min-width: 100px;
  }
  .contactItem {
    float: left;
    width: 20%;
    overflow: hidden;
    line-height: 40px;
    .contactText {
      float: left;
      margin-right: 10px;
      
    }
    .star{
        color:red!important;
      }
  }
  
  .contactIp {
    width: 120px !important;
  }
}
.remarks {
      overflow: hidden;
      font-size: 0.93rem;
      padding: 0 0 10px 0;
      p {
       float: left;
        min-width: 100px;
      }
      .el-textarea {
        float: left;
        width: calc(100%-100px);
      }
    }
    .orderneed{
      overflow: hidden;
    }
    .orderneedText{
          float: left;
    min-width: 100px;
    }
   .feeheader{
     overflow: hidden;
     padding: 0 10% 15px 10%;
     margin: 0 5%;
     border-bottom: 2px solid #ddd;
     
   }
   .headerItem{
     float: left;
     width: calc(100%/5);
     padding-left: 20px;
   }
   .headerItem:nth-of-type(1){
     width: 30%;
   }
   .headerItem:nth-of-type(2){
     width: 20%;
   }
   .headerItem:nth-of-type(3){
     width: 20%;
   }
   .headerItem:nth-of-type(4){
     width: 15%;
   }
   .headerItem:nth-of-type(5){
     width: 15%;
   }
   .feecontent{
     overflow: hidden;
     padding: 0 10% 15px 10%;
     margin: 10px 5%;
   }
   .feehr{
      margin: 10px 5%;
      height: 2px;
      border: none;
      background: #ddd;
   }
    .contentItem{
     float: left;
     width: calc(100%/5);
     padding-left: 20px;
   }
   .contentItem:nth-of-type(1){
     width: 30%;
   }
   .contentItem:nth-of-type(2){
     width: 20%;
   }
   .contentItem:nth-of-type(3){
     width: 20%;
   }
   .contentItem:nth-of-type(4){
     width: 15%;
   }
   .contentItem:nth-of-type(5){
     width: 15%;
   }
   .feecount{ 
     width: 33%;
    margin-left: 65%;
    overflow: hidden;
  }
  .showcount{
    overflow: hidden;
    p{
      width: 33.33%;
      float: left;
      font-size: 1rem;
      font-weight: bold;
    }
  }
  .code{
  .code-input {
    overflow: hidden;
    margin: 0px 0 10px 0;
    .el-input {
      float: left;
      width: 200px;
      .el-input__inner {
        border-radius: unset;
      }
    }
    .codetext {
      background: #d6d6e2;
      margin-left: 200px;
      width: 100px;
      text-align: center;
      line-height: 40px;
      height: 40px;
      font-weight: 600;
      font-size: 1.1rem;
    }
  }
  .code-xieyi {
    font-size: 0.93rem;
    margin: 10px 0 0 0;
    cursor: pointer;
    i{
      margin-right: 10px;
    }
    .agree {
      color: #4a3f91;
    }
  }
}   
.showBtns{
  margin-top: 10px;
  overflow: hidden;
}
.btnItem{
  float: left;
  width: 40%;
  background-color: #4a3f91;
  color: white;
  font-weight: bold;
}
.btnItem:nth-of-type(1){
  margin-right: 20px;
}
</style>
<style lang="scss">
.pendingBookingOrdercontent {
  .item {
    .product-details {
      .product-details-items {
        .product-details-content {
          .el-input {
            .el-input__inner {
              text-align: center;
            }
          }
        }
      }
    }
  }
}
.lastest-time {
  .el-input__prefix {
    left: unset;
    right: 0px;
  }
}
.code {
  .code-input {
    .el-input {
      .el-input__inner {
        border-radius: 0;
      }
    }
  }
}
 .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color:#4a3f91;
    border-color:#4a3f91;
    }
    .el-checkbox__input.is-checked+.el-checkbox__label{
color:#4a3f91;
    }
.el-radio__input.is-checked .el-radio__inner {
  border-color: #4a3f91;
  background: #4a3f91;
}
.el-radio__input.is-checked + .el-radio__label {
  color: #4a3f91;
}
</style>
<template>
  <div>
    <div class="layout" v-loading="loading">
      <div class="showMsg">
        <p>如果在订舱过程中您有任何疑问，请联系我们；信息提交后，我们会马上联系您安排订舱事宜</p>
        <p>
          <span class="showspan">电话： +86 - 0757 - 12345678</span>
          <span class="showspan">手机： +86 - 12345678</span>
          <span>邮箱： chendisi@getnaso.com</span>
        </p>
      </div>
      <!--订舱信息-->
      <div
        class="pendingBookingOrdercontent"
        v-if="orderInfo.type===1||orderInfo.type===3||orderInfo.type===5||orderInfo.type===7"
      >
        <div class="showties">
          <p class="ties">
            提示：您可以在本页面填写订舱信息完成下单，也可以
            <a class="filedownload" href>点击这里</a> 下载《booking表格》，填写好在下方的按钮将《booking表格》提交到平台完成订舱。
          </p>
          <!-- 用ele组件上传 -->
          <div class="tiesBtn">
            <el-upload
              class="upload-demo"
              action="http://upload-as0.qiniup.com/"
              :data="updataHeaders"
              :on-preview="handlePreview1"
              :on-remove="handleRemove1"
              :on-success="onsuccess1"
              :limit="1"
              :on-exceed="onexceed1"
              :before-remove="beforeremove1"
            >
              <el-button
                slot="trigger"
                size="small"
                type="primary"
                style="background: #4A3F91;color: white;"
              >上传booking</el-button>
              <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
            </el-upload>
          </div>
        </div>
        <div class="title">
          <img src="../../assets/img/chuang.png" height="22" width="21">
          <p>订舱信息</p>
        </div>
        <div class="item">
          <div class="port">
            <p>起始港：</p>
            <span>{{dingcang_goods_info.pol_en_name}} {{dingcang_goods_info.pol_cn_name}}</span>
          </div>
          <div class="port">
            <p>目的港：</p>
            <span>{{dingcang_goods_info.pod_en_name}} {{dingcang_goods_info.pod_cn_name}}</span>
          </div>
          <div class="chuandong">
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <p>船东：</p>
                  <span>{{dingcang_goods_info.carrier_code}}</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <p>船名/航次：</p>
                  <span>VSL/VOY：{{dingcang_goods_info.carrier_en_name}}/{{dingcang_goods_info.carrier_cn_name}}</span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="port">
            <p>运输方式：</p>
            <span>海运</span>
          </div>

          <div class="port">
            <p>行程：</p>
            <span>{{dingcang_goods_info.days}}天</span>
          </div>
          <div class="sailInfo">
            <div class="Info-item">
              <p>开航日期：</p>
              <span>{{dingcang_goods_info.sail_date}}</span>
            </div>
            <div class="Info-item">
              <p>截止订舱：</p>
              <span>{{dingcang_goods_info.end_date}}</span>
            </div>
            <div class="Info-item">
              <p>船期：</p>
              <span>周{{dingcang_goods_info.sail_week_day |changeToC}}</span>
              <span
                class="jiekai"
              >{{dingcang_goods_info.end_weed_day |changeToC}}截{{dingcang_goods_info.sail_week_day |changeToC}}开</span>
            </div>
          </div>
          <hr class="line-hr">
          <div class="title">
            <img src="../../assets/img/icon1.png" height="30" width="30">
            <p>货物信息</p>
          </div>
          <div class="product-details">
            <p class="title">货箱详情:</p>
            <div class="product-details-items">
              <div class="product-details-content">
                <p>{{dingcangInfo.gp20_num}}X20'GP</p>
                <span>单箱重量:</span>
                <el-input v-model="dingcangInfo.gp20_weight" placeholder="请输入内容"></el-input>
                <span>KG</span>
              </div>
              <div class="product-details-content">
                <p>{{dingcangInfo.gp40_num}}X20'GP</p>
                <span>单箱重量:</span>
                <el-input v-model="dingcangInfo.gp40_weight" placeholder="请输入内容"></el-input>
                <span>KG</span>
              </div>
              <div class="product-details-content">
                <p>{{dingcangInfo.hq40_num}}X20'HG</p>
                <span>单箱重量:</span>
                <el-input v-model="dingcangInfo.hq40_weight" placeholder="请输入内容"></el-input>
                <span>KG</span>
              </div>
            </div>
          </div>
          <div class="characteristics">
            <p>货物特征：</p>
            <el-select v-model="tezheng" placeholder="请选择">
              <el-option
                v-for="(item,index,key) in tezhengarr"
                :key="key"
                :label="item"
                :value="index"
              ></el-option>
            </el-select>
            <el-input v-model="miaoshu" placeholder="非普通货物必须输入货物描述"></el-input>
          </div>
          <div class="scn">
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <p>Shipper:</p>
                  <span class="star">*</span>
                  <el-input type="textarea" :rows="6" v-model="Shipper"></el-input>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <p>Cosignee:</p>
                  <span class="star">*</span>
                  <el-input type="textarea" :rows="6" v-model="Cosignee"></el-input>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <p>Notify party:</p>
                  <span class="star">*</span>
                  <el-input type="textarea" :rows="6" v-model="Notify_party"></el-input>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="orderInfo">
            <p>其他信息：</p>
            <div class="orderInfo-form">
              <el-row>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <span class="star">*</span>
                    <el-select v-model="tidantyep" placeholder="提单类型">
                      <el-option
                        v-for="(item,index,key) in tidantyeparr"
                        :key="key"
                        :label="item.value"
                        :value="index"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <span class="star">*</span>
                    <el-select v-model="tiaokuan" placeholder="运输条款">
                      <el-option
                        v-for="(item,index,key) in tiaokuan_options"
                        :key="key"
                        :label="(item).toString()"
                        :value="index"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <span class="star">*</span>
                    <el-select v-model="fanghuo" placeholder="放货方式">
                      <el-option
                        v-for="(item,index,key) in fanghuo_options"
                        :key="key"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="goodsInfo">
            <p>货物信息：</p>
            <div class="goodsInfo-form">
              <el-row>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <el-date-picker v-model="huowwdate" type="datetime" placeholder="货物准备好日期"></el-date-picker>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <el-select v-model="baozhuang" placeholder="包装种类">
                      <el-option
                        v-for="(item,index,key) in baozhuang_options"
                        :key="key"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <el-input v-model="zongzhongliang" placeholder="总重量"></el-input>
                    <span class="ties">KG</span>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <el-input v-model="chicun" placeholder="总尺寸"></el-input>
                    <span class="ties">CBM</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="description">
            <span>唛头:</span>
            <el-input type="textarea" :rows="4" placeholder="唛头" v-model="maitou"></el-input>
            <span>货物描述:</span>
            <el-input type="textarea" :rows="4" placeholder="货物描述" v-model="product_remark"></el-input>
          </div>
        </div>
      </div>
     
   
   

      <el-card class="box-card_2">
        <div class="content">
          <!-- 修改的部分 -->
          <div class="title">
            <img src="../../assets/img/icon1.png" height="30" width="30">
            <p>交付信息</p>
          </div>
          <div class="orderneed">
            <span class="orderneedText">其他需求</span>
            <el-checkbox v-model="checked1">拖车</el-checkbox>
            <el-checkbox v-model="checked2">报关</el-checkbox>
          </div>
          <div class="orderneed">
            <span class="orderneedText" >付款方式</span>
            <el-radio v-model="radioway" label="1">预付</el-radio>
            <el-radio v-model="radioway" label="2">到付</el-radio>
          </div>
          <div class="contact">
            <span class="contactName">订舱联系人:</span>
            <div class="contactItem">
              <p class="contactText">
                <span class="star">*</span>联系人
              </p>
              <el-input class="contactIp" v-model="dcman" placeholder="请输入内容"></el-input>
            </div>
            <div class="contactItem">
              <p class="contactText">
                <span class="star">*</span>邮箱
              </p>
              <el-input class="contactIp" v-model="dcmanemali" placeholder="请输入内容"></el-input>
            </div>
            <div class="contactItem">
              <p class="contactText">
                <span class="star">*</span>电话
              </p>
              <el-input class="contactIp" v-model="dcmanphone" placeholder="请输入内容"></el-input>
            </div>
            <div class="contactItem">
              <p class="contactText">
                <span class="star">*</span>手机
              </p>
              <el-input class="contactIp" v-model="dcmanmobile" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="contact">
            <span class="contactName">委托联系人:</span>
            <div class="contactItem">
              <p class="contactText">
                <span class="star">*</span>联系人
              </p>
              <el-input class="contactIp" v-model="wtman" placeholder="请输入内容"></el-input>
            </div>

            <div class="contactItem">
              <p class="contactText">&nbsp;邮箱</p>
              <el-input class="contactIp" v-model="wtmanemali" placeholder="请输入内容"></el-input>
            </div>

            <div class="contactItem">
              <p class="contactText">
                <span class="star">*</span>电话
              </p>
              <el-input class="contactIp" v-model="wtmanphone" placeholder="请输入内容"></el-input>
            </div>

            <div class="contactItem">
              <p class="contactText">
                <span class="star">*</span>手机
              </p>
              <el-input class="contactIp" v-model="wtmanmobile" placeholder="请输入内容"></el-input>
            </div>
          
          </div>

          <div class="remarks">
            <p>备注：</p>
            <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="dcbeizhu"></el-input>
          </div>
        </div>
      </el-card>

      <div class="trailerpendingOrdercontent3">
        <div class="title">
          <img src="../../assets/img/oktitle.png" height="28" width="30">
          <p>确认费用信息</p>
        </div>
        <!-- 新版修改的费用显示 -->
        <div class="feeheader">
           <p class="headerItem" v-for="(item,index) in feeheaderData" :key="index">{{item}}</p>
        </div>
        <div class="feecontent" v-for="(item,index) in feecontentData" :key="index">
           <p v-for="(items,index) in item" :key="index" class="contentItem">{{items}} </p>
        </div>
        <hr class="feehr">
        <div class="feecount">
            <div  class="showcount">
               <p>费用总计</p>
               <p>USD:1315</p>
               <p>CNY:210</p>
            </div>
            <div class="code">
              <div class="code-xieyi" @click="agreebtn">
                <i v-show="!agree" class="el-icon-circle-check-outline"></i>
                <i v-show="agree" class="el-icon-circle-check agree agree"></i>
                <span :class="{'agree':agree}">我已阅读并同意《纳信物流综合服务委托协议》</span>
              </div>
            </div>
            <div class="showBtns">
              <el-button class="btnItem">保存为订舱模板</el-button>
              <el-button class="btnItem">确认订舱</el-button>
            </div>
        </div>
      </div>
      <div class="okbtn">
        <hr class="left-hr">
        <el-button class="okbtn-btn" @click="submitorder">确认委托</el-button>
        <hr class="right-hr">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "trailerPendingOrderContent",
  filters: {
    changeToC: function(value) {
      switch (value) {
        case "1":
          return "一";
          break;
        case "2":
          return "二";
          break;
        case "3":
          return "三";
          break;
        case "4":
          return "四";
          break;
        case "5":
          return "五";
          break;
        case "6":
          return "六";
          break;
        case "7":
          return "日";
          break;
      }
      return value + 1;
    }
  },
  data() {
    return {
      //后加
      feeheaderData:['项目','计算单位','单价','数量','金额'],
      feecontentData:[
        {name:'海运费',unit:"20'GP",price:'USD 315',num:'x1',countprice:'USD 315'},
        {name:'海运费',unit:"40'GP",price:'USD 500',num:'x2',countprice:'USD 1000'},
        {name:'紧急燃油附加费',unit:"20'GP",price:'CNY 50',num:'x1',countprice:'CNY 50'},
        {name:'紧急燃油附加费',unit:"40'GP",price:'CNY 80',num:'x2',countprice:'CNY 160'},
        ],
      dcman: null,
      dcmanemali: null,
      dcmanphone: null,
      dcmanmobile: null,
      wtman: null,
      wtmanemali: null,
      wtmanphone: null,
      wtmanmobile: null,
      radioway: "1",
      checked1: false,
      checked2: false,
      //
      updataHeaders: {},
      uploadToken: {
        token: ""
      },

      //订舱联系人信息
      dcname: "",
      dcemail: "",
      dcphone: "",
      dcmobile: "",
      //--------
      huowwdate: "",
      baozhuang: "",
      baozhuang_options: [
        { value: "AEROSOL", label: "AEROSOL" },
        { value: "ATOMIZER", label: "ATOMIZER" },
        { value: "BAGS", label: "BAGS" },
        { value: "BALES", label: "BALES" },
        { value: "BALLS", label: "BALLS" }
      ],
      zongzhongliang: "",
      chicun: "",
      maitou: "",
      product_remark: "",
      dcbeizhu: "",
      //tiaoj=kuang
      tiaokuan: "",
      tiaokuan_options: [],
      fanghuo: "",
      fanghuo_options: [
        { value: "正本", label: "正本" },
        { value: "电放", label: "电放" }
      ],
      //
      Shipper: "",
      Cosignee: "",
      Notify_party: "",
      //提单类型
      tidantyep: "",
      tidantyeparr: [
        {},
        {
          value: "hbl",
          label: "HBL"
        }
      ],

      //箱属性
      box: "",
      boxarr: [],
      //货物特征
      tezheng: "",
      miaoshu: "",
      tezhengarr: [],
      //订舱信息
      dingcangInfo: {},
      dingcang_goods_info: {},
      //订舱号
      dingcangcode: "",
      agree: false,
      code: "DIFJ",
      codevalue: "",
      radio: null,
      textarea2: "",
      input1: "",
      ponum: "",
      WhatsApp: "",
      beiyongQQ: "",
      lianxi_name: "",
      lianxi_phone: "",
      closetime: "",
      opentime: "",
      textarea: "",
      goods_weight: "",
      goods_weight_options: [
        { label: "1吨", value: "1" },
        { label: "2吨", value: "2" },
        { label: "3吨", value: "3" },
        { label: "4吨", value: "4" },
        { label: "5吨", value: "5" },
        { label: "6吨", value: "6" },
        { label: "7吨", value: "7" },
        { label: "8吨", value: "8" },
        { label: "9吨", value: "9" },
        { label: "10吨", value: "10" },
        { label: "11吨", value: "11" },
        { label: "12吨", value: "12" },
        { label: "13吨", value: "13" },
        { label: "14吨", value: "14" },
        { label: "15吨", value: "15" },
        { label: "16吨", value: "16" },
        { label: "17吨", value: "17" },
        { label: "18吨", value: "18" },
        { label: "19吨", value: "19" },
        { label: "20吨", value: "20" },
        { label: "21吨", value: "21" },
        { label: "22吨", value: "22" },
        { label: "23吨", value: "23" },
        { label: "24吨", value: "24" },
        { label: "25吨", value: "25" }
      ],
      yuegui: "",
      yuegui_options: [
        { label: "如外堆场提柜，需要平台代约柜", value: "1" },
        { label: "不需要，我司自行约柜", value: "0" }
      ],
      vgmway: "",
      vgmway_options: [],
      put_position: "",
      put_position_options: [],
      zhuanhuo: "",
      zhuanhuo_options: [
        { label: "主体地址先装", value: "1" },
        { label: "客体地址先装", value: "2" }
      ],
      ketiaddress: "",
      //订单信息
      orderInfo: {},
      trailer: null,
      //        baoguanInfo:{},
      //拖车详情
      trailer_goods: {},
      //过磅数据
      weigh_type: {},
      //订单过磅类型
      show_weigh_type: "",
      //基础数据
      initData: {},
      //拖柜地点
      address_detail: [],
      //报关数据
      baoguanInfo: null,
      baoguan20gpnum: 0,
      baoguan40gpnum: 0,
      baoguan40hqnum: 0,
      customs_product: "", //货品名
      //费用
      fujiafee: null,
      tuochefee: null,
      tuocheservicefee: null,
      baoguanservicefee: null,
      liandanfee: null,
      countfee1: null,
      countfee2: null,
      orderId: null,
      //so
      so_file: null,
      so_file_name: null,
      showHeader: "",
      nowattr: [],
      //订舱附加费
      dcfujiafee: [],
      dingcangfeiyong: 0,
      USDcountfee: 0,
      jindu: 0,
      jindu1: 0,
      isjindu1: false,
      jindu1index: null,
      loading: true,
      loading1: false,
      loading2: false,
      baoguanfile: [],
      areadypostfile: [],
      //上传booking表格
      bookingfile: null,
      bookingfileName: null
    };
  },
  methods: {
    // 添加文字
    addtext(index) {
      switch (index) {
        case 0:
          this.textarea = this.textarea + " # 一定要记得熏蒸 #";
          break;
        case 1:
          this.textarea = this.textarea + " # 转关柜请记得带司机本 #";
          break;
      }
    },
    onexceed() {
      alert("请先删除已上传的图片");
    },
    beforeremove() {
      this.so_file = null;
      this.so_file_name = null;
    },
    handleRemove(file, fileList) {},
    handlePreview(file) {},
    onsuccess(res, file) {
      this.so_file = this.updataHeaders.domain + res.key;
      this.so_file_name = file.name;
    },
    onexceed1() {
      alert("请先删除已上传的图片");
    },
    beforeremove1() {
      this.bookingfile = null;
      this.bookingfileName = null;
    },
    handleRemove1(file, fileList) {},
    handlePreview1(file) {},
    onsuccess1(res, file) {
      this.bookingfile = this.updataHeaders.domain + res.key;
      this.bookingfileName = file.name;
    },
    agreebtn() {
      this.agree = !this.agree;
    },
    getorderData() {
      let that = this;
      let url =
        that.$store.state.headerUrl + "member/freight_order/" + that.orderId;
      //        let url = that.$store.state.headerUrl + 'member/freight_order/' + that.orderId;
      let tempalert = that.$alert;
      that.comment
        .axiosGet(url, that.$axios, that.$store, {}, tempalert, that)
        .then(function(resp) {
          if (resp.data.code === 0) {
            that.orderInfo = resp.data.data;

            if (
              that.orderInfo.type === 1 ||
              that.orderInfo.type === 3 ||
              that.orderInfo.type === 5 ||
              that.orderInfo.type === 7
            ) {
              that.baoguan20gpnum = that.orderInfo.shipping.gp20_num;
              that.baoguan40gpnum = that.orderInfo.shipping.gp40_num;
              that.baoguan40hqnum = that.orderInfo.shipping.hq40_num;
            }
            if (that.orderInfo.type === 6) {
              if (that.orderInfo.trailer.gp20_twin_num > 0) {
                that.baoguan20gpnum =
                  Number(that.orderInfo.trailer.gp20_num) +
                  Number(that.orderInfo.trailer.gp20_twin_num) * 2;
              } else {
                that.baoguan20gpnum = that.orderInfo.trailer.gp20_num;
              }
              that.baoguan40gpnum = that.orderInfo.trailer.gp40_num;
              that.baoguan40hqnum = that.orderInfo.trailer.hq40_num;
            }
            //订舱信息
            if (
              that.orderInfo.type === 1 ||
              that.orderInfo.type === 3 ||
              that.orderInfo.type === 5 ||
              that.orderInfo.type === 7
            ) {
              that.dingcangInfo = that.orderInfo.shipping;
              that.dingcang_goods_info = that.orderInfo.shipping.goods_info;
              for (var i = 0; i < that.dingcangInfo.surcharge.length; i++) {
                if (that.dingcangInfo.surcharge[i].price !== "0") {
                  let name = that.dingcangInfo.surcharge[i].surcharge_cn_name;
                  let fee = that.dingcangInfo.surcharge[i].price;
                  let currency = that.dingcangInfo.surcharge[i].currency;
                  that.dcfujiafee.push({
                    name: name,
                    fee: fee,
                    currency: currency
                  });
                } else {
                  let name = that.dingcangInfo.surcharge[i].surcharge_cn_name;
                  let currency = that.dingcangInfo.surcharge[i].currency;
                  let fee =
                    Number(that.num1) *
                      Number(that.dingcangInfo.surcharge[i].gp20_price) +
                    Number(that.num2) *
                      Number(that.dingcangInfo.surcharge[i].gp40_price) +
                    Number(that.num3) *
                      Number(that.dingcangInfo.surcharge[i].hq40_price);
                  that.dcfujiafee.push({
                    name: name,
                    fee: fee,
                    currency: currency
                  });
                }
              }
              //订舱附加费
              let tempcount = 0;
              let tempcount1 = 0;
              for (var i = 0; i < that.dcfujiafee.length; i++) {
                if (that.dcfujiafee[i].currency === "CNY") {
                  tempcount1 = tempcount1 + Number(that.dcfujiafee[i].fee);
                } else {
                  tempcount = tempcount + Number(that.dcfujiafee[i].fee);
                }
              }
              //计算总费用（订舱部分）
              that.USDcountfee =
                Number(that.dingcangInfo.gp20_price) +
                Number(that.dingcangInfo.gp40_price) +
                Number(that.dingcangInfo.hq40_price) +
                tempcount; //USD总价
              that.dingcangfeiyong = tempcount1; //CNY总价
            }
            //拖车信息
            if (
              that.orderInfo.type === 4 ||
              that.orderInfo.type === 5 ||
              that.orderInfo.type === 6 ||
              that.orderInfo.type === 7
            ) {
              that.trailer = that.orderInfo.trailer;
              that.address_detail = that.trailer.address_detail;
              that.fujiafee = that.trailer.surcharge;
              if (that.address_detail.lenght) {
                for (var i = 0; i < that.address_detail.length; i++) {
                  that.address_detail[i].load_time = "";
                }
              }
              that.gettuocheInfo(that.orderInfo.trailer.trailer_goods_id);
              //获取订单的过磅类型
              for (var key in that.weigh_type) {
                if (that.trailer.weigh_type === key) {
                  that.show_weigh_type = that.weigh_type[key];
                }
              }
            }
            //报关信息
            if (
              that.orderInfo.type === 2 ||
              that.orderInfo.type === 3 ||
              that.orderInfo.type === 6 ||
              that.orderInfo.type === 7
            ) {
              that.baoguanInfo = resp.data.data.customs_declare_info;
              that.baoguanInfo.has_paper = that.baoguanInfo.has_paper.toString();
            }
            that.culfee();
            that.loading2 = true;
          }
        });
    },
    gettuocheInfo(id) {
      var that = this;
      let tempalert = that.$alert;
      let url = that.$store.state.headerUrl + "freight/trailer/goods/" + id;
      that.comment
        .axiosGet(url, that.$axios, that.$store, {}, tempalert, that)
        .then(function(resp) {
          if (resp.data.code === 0) {
            that.trailer_goods = resp.data.data;
          }
          that.culfee();
        })
        .catch(function(error) {
          tempalert(error, {
            confirmButtonText: "确定",
            callback: action => {}
          });
        });
    },
    //计算费用
    culfee() {
      //订舱费用   that.USDcountfee;that.dingcangfeiyong

      let that = this;
      let usdcount = that.USDcountfee;
      let cnycount = that.dingcangfeiyong;
      //计算拖车费
      if (that.trailer !== null) {
        if (that.trailer.gp20_twin_num && that.trailer.gp20_twin_num > 0) {
          that.tuochefee =
            Number(that.trailer.gp20_num) * that.trailer_goods.gp20_price +
            Number(that.trailer.gp40_num) * that.trailer_goods.gp40_price +
            Number(that.trailer.hq40_num) * that.trailer_goods.hq40_price +
            Number(that.trailer.hq45_num) * that.trailer_goods.hq45_price +
            Number(that.trailer.gp20_twin_num) *
              that.trailer_goods.gp20twin_price;
          cnycount = cnycount + that.tuochefee;
        } else {
          that.tuochefee =
            Number(that.trailer.gp20_num) * that.trailer_goods.gp20_price +
            Number(that.trailer.gp40_num) * that.trailer_goods.gp40_price +
            Number(that.trailer.hq40_num) * that.trailer_goods.hq40_price +
            Number(that.trailer.hq45_num) * that.trailer_goods.hq45_price;
          cnycount = cnycount + that.tuochefee;
        }
        if (that.trailer.surcharge !== null) {
          for (var i = 0; i < that.trailer.surcharge.length; i++) {
            if (that.trailer.surcharge[i].currency === "CNY") {
              if (that.trailer.surcharge[i].type === "0") {
                cnycount = cnycount + Number(that.trailer.surcharge[i].price);
              } else if (that.trailer.surcharge[i].type === "1") {
                let temp20gpnum = 0;
                if (
                  that.trailer.gp20_twin_num &&
                  that.trailer.gp20_twin_num > 0
                ) {
                  temp20gpnum =
                    Number(that.trailer.gp20_twin_num) * 2 +
                    that.trailer.gp20_num;
                } else {
                  temp20gpnum = that.trailer.gp20_num;
                }
                cnycount =
                  cnycount +
                  temp20gpnum * that.trailer.surcharge[i].gp20_price +
                  Number(that.trailer.gp40_num) *
                    that.trailer.surcharge[i].gp40_price +
                  Number(that.trailer.hq40_num) *
                    that.trailer.surcharge[i].hq40_price;
              }
            } else {
              if (that.trailer.surcharge[i].type === "0") {
                usdcount = usdcount + Number(that.trailer.surcharge[i].price);
              } else if (that.trailer.surcharge[i].type === "1") {
                let temp20gpnum = 0;
                if (
                  that.trailer.gp20_twin_num &&
                  that.trailer.gp20_twin_num > 0
                ) {
                  temp20gpnum =
                    Number(that.trailer.gp20_twin_num) * 2 +
                    that.trailer.gp20_num;
                } else {
                  temp20gpnum = that.trailer.gp20_num;
                }
                usdcount =
                  usdcount +
                  temp20gpnum * that.trailer.surcharge[i].gp20_price +
                  Number(that.trailer.gp40_num) *
                    that.trailer.surcharge[i].gp40_price +
                  Number(that.trailer.hq40_num) *
                    that.trailer.surcharge[i].hq40_price;
              }
            }
          }
        }
      }
      //报关费用
      if (that.baoguanInfo) {
        if (that.baoguanInfo === null) {
          that.baoguanservicefee = 0;
        } else {
          that.baoguanservicefee = that.baoguanInfo.service_fee;
          cnycount = cnycount + Number(that.baoguanservicefee);
          if (that.baoguanInfo.surcharge_list !== null) {
            for (var i = 0; i < that.baoguanInfo.surcharge_list.length; i++) {
              if (that.baoguanInfo.surcharge_list[i].currency === "CNY") {
                if (that.baoguanInfo.surcharge_list[i].type === "0") {
                  cnycount =
                    cnycount + Number(that.baoguanInfo.surcharge_list[i].price);
                } else if (that.baoguanInfo.surcharge_list[i].type === "1") {
                  cnycount =
                    cnycount +
                    Number(that.baoguan20gpnum) *
                      that.baoguanInfo.surcharge_list[i].gp20_price +
                    Number(that.baoguan40gpnum) *
                      that.baoguanInfo.surcharge_list[i].gp40_price +
                    Number(that.baoguan40hqnum) *
                      that.baoguanInfo.surcharge_list[i].hq40_price;
                }
              } else {
                if (that.baoguanInfo.surcharge_list[i].type === "0") {
                  usdcount =
                    usdcount + Number(that.baoguanInfo.surcharge_list[i].price);
                } else if (that.baoguanInfo.surcharge_list[i].type === "1") {
                  usdcount =
                    usdcount +
                    Number(that.baoguan20gpnum) *
                      that.baoguanInfo.surcharge_list[i].gp20_price +
                    Number(that.baoguan40gpnum) *
                      that.baoguanInfo.surcharge_list[i].gp40_price +
                    Number(that.baoguan40hqnum) *
                      that.baoguanInfo.surcharge_list[i].hq40_price;
                }
              }
            }
          }
        }
      } else {
        that.baoguanservicefee = 0;
      }
      that.countfee1 = usdcount;
      that.countfee2 = cnycount;
    },
    //提交
    submitorder() {
      let that = this;
      let tempalert = that.$alert;
      if (!that.agree) {
        tempalert("未接受协议，不能提交", {
          confirmButtonText: "确定",
          callback: action => {
            return;
          }
        });
        return;
      }
      let temp_address_detail = [];
      let params = {
        id: Number(that.orderId),
        contact_name: that.orderInfo.contact_name,
        contact_email: that.orderInfo.contact_email,
        contact_phone: that.orderInfo.contact_phone,
        contact_qq: that.orderInfo.contact_qq,
        contact_whatsapp: that.orderInfo.contact_whatsapp,
        contact_mobile: "",
        so_file: that.so_file,
        so_file_name: that.so_file_name
      };
      //存在订舱的情况
      if (
        that.orderInfo.type === 1 ||
        that.orderInfo.type === 3 ||
        that.orderInfo.type === 5 ||
        that.orderInfo.type === 7
      ) {
        if (that.dingcangInfo.gp40_weight === "") {
          that.dingcangInfo.gp40_weight = 0;
        }
        if (that.dingcangInfo.hq40_weight === "") {
          that.dingcangInfo.hq40_weight = 0;
        }
        if (that.dingcangInfo.gp20_weight === "") {
          that.dingcangInfo.gp20_weight = 0;
        }
        if (that.huowwdate === "") {
          tempalert("货物准备好日期为空", {
            confirmButtonText: "确定",
            callback: action => {}
          });
          return;
        }

        let shopping = {
          //              id:Number(that.dingcangInfo.id),
          gp20_weight: Number(that.dingcangInfo.gp20_weight),
          gp40_weight: Number(that.dingcangInfo.gp40_weight),
          hq40_weight: Number(that.dingcangInfo.hq40_weight),
          container_attr: that.box,
          product_characteristics: that.tezheng,
          product_characteristics_remark: that.miaoshu,
          shipper: that.Shipper,
          consignee: that.Cosignee,
          notify_party: that.Notify_party,
          bill_lading_type: that.tidantyep,
          transport_terms: that.tiaokuan,
          phone: that.dingcangInfo.phone,
          mobile: that.dingcangInfo.mobile,
          product_ready_date: that.comment.formate(
            "yyyy-MM-dd",
            that.huowwdate
          ),
          packing_type: that.baozhuang,
          total_weight: Number(that.zongzhongliang),
          total_size: that.chicun,
          shipping_mark: that.maitou,
          product_remark: that.product_remark,
          remark: that.dcbeizhu
        };
        params.shipping = shopping;
      }
      //存在拖车的情况
      if (
        that.orderInfo.type === 4 ||
        that.orderInfo.type === 5 ||
        that.orderInfo.type === 6 ||
        that.orderInfo.type === 7
      ) {
        if (that.goods_weight === "") {
          tempalert("请选择货重", {
            confirmButtonText: "确定",
            callback: action => {}
          });
          return;
        }
        if (that.yuegui === "") {
          tempalert("请选择是否平台约柜", {
            confirmButtonText: "确定",
            callback: action => {}
          });
          return;
        }
        let temp_trailer = {
          //            id: that.trailer.id,
          shipping_no: that.dingcangcode,
          weight: Number(that.goods_weight),
          is_pt_yuegui: Number(that.yuegui),
          po_no: that.ponum,
          vgm: that.vgmway,
          put_position: that.put_position,
          is_ztxz: that.trailer.is_ztxz,
          kt_address: that.trailer.kt_address,
          comment: that.textarea,
          address_detail: []
        };
        console.info(that.dingcangcode);

        if (that.opentime != "") {
          temp_trailer.kc_datetime = that.opentime;
        }
        if (that.closetime != "") {
          temp_trailer.jg_datetime = that.closetime;
        }
        for (var i = 0; i < that.address_detail.length; i++) {
          if (that.address_detail[i].load_time === "") {
            tempalert("请选择装货时间", {
              confirmButtonText: "确定",
              callback: action => {}
            });
            return;
          } else {
            // that.address_detail[i].load_time = that.comment.formate('hh:mm',new Date(that.address_detail[i].load_time));
            temp_address_detail.push({
              id: that.address_detail[i].id,
              load_time: that.address_detail[i].load_time
            });
          }
        }
        temp_trailer.address_detail = temp_address_detail;
        params.trailer = temp_trailer;
      }
      //存在报关的情况
      if (
        that.orderInfo.type === 2 ||
        that.orderInfo.type === 3 ||
        that.orderInfo.type === 6 ||
        that.orderInfo.type === 7
      ) {
        if (that.so_file === null) {
          tempalert("未提交so凭证", {
            confirmButtonText: "确定",
            callback: action => {
              return;
            }
          });
          return;
        }
        let temparr = that.baoguanInfo.attr.concat(that.nowattr);
        let customs_declare = {
          bl_no: that.baoguanInfo.bl_no,
          customs_product: that.customs_product,
          gp20_num: Number(that.baoguan20gpnum),
          gp40_num: Number(that.baoguan40gpnum),
          hq40_num: Number(that.baoguan40hqnum),
          hq45_num: 0,
          has_paper: that.baoguanInfo.has_paper,
          customs_date: that.baoguanInfo.customs_date,
          comment: that.baoguanInfo.comment,
          company_name: that.baoguanInfo.company_name,
          trade_order_sn: that.baoguanInfo.trade_order_sn,
          attr_list: temparr
        };
        if (that.baoguanInfo.customs_date === null) {
          tempalert("预计报关日期不能为空", {
            confirmButtonText: "确定",
            callback: action => {
              return;
            }
          });
          return;
        }
        customs_declare.customs_date = that.comment.formate(
          "yyyy-MM-dd",
          new Date(customs_declare.customs_date)
        );
        customs_declare.has_paper = Number(customs_declare.has_paper);
        params.customs_declare = customs_declare;
      }
      let url = that.$store.state.headerUrl + "member/freight_order";
      that.comment
        .axiosPut(url, that.$axios, that.$store, params, tempalert, that)
        .then(function(resp) {
          if (resp.data.code === 0) {
            tempalert(resp.data.msg, {
              confirmButtonText: "确定",
              callback: action => {
                that.$router.push({ path: "member/processingOrderlist" });
              }
            });
          }
        })
        .catch(function(error) {
          tempalert(error, {
            confirmButtonText: "确定",
            callback: action => {
              return;
            }
          });
        });
    },
    //上传报关文件
    baoguanupdate(e) {
      const jsonUsers = localStorage.getItem("token");
      this.jindu1 = 0;
      let tempalert = this.$alert;
      this.isjindu1 = true;
      let file = e.target.files[0];
      let type = e.target.files[0].name.split(".");
      let tempvalue = "";
      this.comment.getfile_md5(file, function(resp) {
        tempvalue = resp + "." + type[type.length - 1];
      });
      let times = 1;
      window.setInterval(() => {
        times--;
        if (times === 0) {
          let param = new FormData(); //创建form对象
          var putExtra = {
            fname: "",
            params: {},
            mimeType: null
          };
          putExtra.params["x:name"] = file.name.split(".")[0];
          param.append("file", file, file.name, putExtra);
          param.append("key", tempvalue);
          //FormData私有类对象，访问不到，可以通过get判断值是否传进去
          let config = {
            onUploadProgress: progressEvent => {
              var complete =
                ((progressEvent.loaded / progressEvent.total) * 100) | 0;
              this.jindu1 = complete;
            },
            headers: { "Content-Type": "multipart/form-data" },
            useCdnDomain: true,
            disableStatisticsReport: false,
            retryCount: 6
          };
          //判断是否已选或者已上传
          var isselect = false;
          this.baoguanfile.forEach(function(item, index) {
            if (item.value === e.target.value && !isselect) {
              isselect = true;
            }
          });
          this.areadypostfile.forEach(function(item, index) {
            if (item.value === e.target.value && !isselect) {
              isselect = true;
            }
          });
          if (!isselect) {
            //先从自己的服务端拿到七牛token
            this.$axios
              .get(this.$store.state.headerUrl + "qiniu_token", {
                headers: {
                  token: jsonUsers
                }
              })
              .then(response => {
                this.token = response.data.data.token;
                this.showHeader = response.data.data.domain;
                param.append("token", this.token);
                this.baoguanfile.push({
                  param: param,
                  config: config,
                  name: file.name,
                  putExtra: putExtra,
                  value: e.target.value
                });
                //                this.uploading1(param,config,file.name,file,putExtra);//然后将参数上传七牛
              });
          } else {
            tempalert("该文件已选择", {
              confirmButtonText: "确定",
              callback: action => {}
            });
          }
        }
      }, 1000);
    },
    //七牛上传图片
    //      uploading1 (param,config,pathName,file,putExtra){
    uploading1() {
      let that = this;
      that.baoguanfile.forEach(function(item, index) {
        that.jindu1index = index;
        that.$axios
          .post(
            "http://upload-as0.qiniup.com/",
            item.param,
            item.config,
            item.file,
            item.putExtra
          )
          .then(response => {
            that.baoguanInfo.attr.push({
              title: item.name,
              url: that.showHeader + response.data.key
            });
            that.isjindu1 = false;
            that.areadypostfile.push({ value: item.value });
          })
          .catch(function(error) {
            that.isjindu1 = false;
            alert(error);
          });
      });
      that.jindu1index = null;
      let times = 1;
      window.setInterval(() => {
        times--;
        if (times === 0) {
          that.baoguanfile = [];
        }
      }, 1000);
    }
  },
  mounted() {
    let userInfo = JSON.parse(localStorage.getItem("users"));
    this.$axios
      .get(this.$store.state.headerUrl + "qiniu_uptk", {
        headers: {
          token: userInfo ? userInfo.token : ""
        }
      })
      .then(res => {
        if (res.data.data.length > 0) {
          this.updataHeaders = {
            domain: "",
            token: ""
          };
        } else {
          this.updataHeaders = res.data.data;
        }
      });

    let that = this;
    that.orderId = that.$route.query.id;
    //基础数据
    that.comment.initData(that.$store, that.$axios).then(function(resp) {
      localStorage.setItem("initData", JSON.stringify(resp));
      localStorage.setItem("initDataTime", new Date().getTime());
      that.initData = JSON.parse(localStorage.getItem("initData"));
      that.weigh_type = that.initData.freight.weigh_type;
      that.vgmway_options = that.initData.freight.vgm;
      that.put_position_options = that.initData.freight.put_position;
      that.boxarr = that.initData.freight.container_attr;
      that.tezhengarr = that.initData.freight.product_characteristics;
      that.tidantyeparr = that.initData.freight.bill_lading_type;
      that.tiaokuan_options = that.initData.freight.transport_terms;
      that.loading1 = true;
      that.$store.commit("SET_TITLE", resp.freight.freight_name);
    });
    that.getorderData();
  },
  beforeDestroy(){
    localStorage.setItem("sssssss",'销毁')
  },
  watch: {
    loading1: function(val) {
      if (this.loading1 && this.loading2) {
        this.loading = false;
      }
    },
    loading2: function(val) {
      if (this.loading1 && this.loading2) {
        this.loading = false;
      }
    }
  },
  baoguan20gpnum: function() {
    if (this.orderInfo.type === 2) {
      this.culfee();
    }
  },
  baoguan40gpnum: function() {
    if (this.orderInfo.type === 2) {
      this.culfee();
    }
  },
  baoguan40hqnum: function() {
    if (this.orderInfo.type === 2) {
      this.culfee();
    }
  }
};
</script>

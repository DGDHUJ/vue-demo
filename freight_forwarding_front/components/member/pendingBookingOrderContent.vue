<style scoped lang="scss">
   .pendingBookingOrdercontent{
     background: white;
     min-height: 600px;
     padding: 20px;
     .title{
       overflow: hidden;
       img{
         float: left;
       }
       p{
         height: 25px;
         line-height: 24px;
         font-size: 1rem;
         margin: 0 0 0 30px;
         font-weight: 600;
         color: black;
       }
     }
     .item{
       padding:20px 0 0 0;
       .port{
         font-size: 0.875rem;
         padding:0 0 10px 0 ;
         p{
          display: inline-block;
           min-width: 100px;
         }
         span{

         }
       }
       .chuandong{
         .grid-content{
           font-size: 0.875rem;
           padding:0 0 10px 0 ;
           p{
             display: inline-block;
             min-width: 100px;
           }
           span{

           }
         }

       }
       .product-details{
         display: flex;
         font-size: 0.875rem;
         padding:0 0 10px 0 ;
         .title{
           min-width: 100px;
           line-height: 40px;
         }
        .product-details-items{
          .product-details-content{
            font-size: 0.875rem;
            margin-bottom: 10px;
            p{
              display: inline-block;
              line-height: 40px;
              min-width: 100px;
            }
            span:first-of-type{
              padding-right: 10px;
            }
            .el-input{
              position: relative;
              margin-right: 10px;
              display: inline-block;
              width: 80px;
            }
          }
         }

       }
       .contact{
        //  display:flex ;
         font-size: 0.875rem;
         padding:0 0 10px 0 ;
         p{
           min-width: 100px;
           line-height: 40px;
         }
         .contact-form{
           width: 100%;
           .grid-content{
             position: relative;
             .star{
               position: absolute;
               left: 0;
               z-index: 88;
               top: 14px;
               color: red;
             }
             .el-input{
               width: 90%;
               margin-left: 15px;
             }

           }
         }

       }
       .box-attribute{
         display:flex ;
         font-size: 0.875rem;
         padding:0 0 10px 0 ;
         p{
           min-width: 100px;
           line-height: 40px;
         }
         .el-select{
           margin-left: 15px;
         }
       }
       .characteristics{
         display:flex ;
         font-size: 0.875rem;
         padding:0 0 10px 0 ;
         p{
           min-width: 100px;
           line-height: 40px;
         }
         .el-select{
           margin-left: 15px;
         }
         .el-input{
           margin-left:63px;
           width: 50%;
         }
       }
       .scn{
         padding:0 0 10px 0 ;
         .grid-content{
           display: flex;
           p{
             min-width: 100px;
           }
           span{
             color: red;
           }
           .el-textarea{
             width: 55%;
             margin-left:10px;
           }
         }
       }
       .orderInfo{
         display: flex;
         padding:0 0 10px 0 ;
         font-size: 0.875rem;
         p{
           min-width: 100px;
           line-height: 40px;
         }
         .orderInfo-form{
           width: 100%;
           .grid-content{
             position: relative;
             .star{
               position: absolute;
               left: 0;
               z-index: 88;
               top: 14px;
               color: red;
             }
             .el-select{
               margin-left: 15px;
             }
             .el-input{
               margin-left: 15px;
               width: 80.5%;
             }

           }
         }
       }
       .goodsInfo{
         display: flex;
         padding:0 0 10px 0 ;
         font-size: 0.875rem;
         p{
           min-width: 100px;
           line-height: 40px;
         }
         .goodsInfo-form{
           width: 100%;
           .grid-content{
             position: relative;
             .ties{
               margin-left: 10px;
             }
             .el-input{
               margin-left: 15px;
               width: 80.5%;
             }
             .el-input:last-of-type{
               width: 65%;
             }
             .el-input:nth-of-type(3){
               width: 65%;
             }
           }
         }
       }
       .description{
         display: flex;
         padding:0 0 10px 0 ;
         font-size: 0.875rem;
         padding-left: 100px;
         .el-textarea{
           margin:0 15px;
         }
       }
       .note{
         display: flex;
         font-size: 0.875rem;
         padding:0 0 10px 0 ;
         p{
           display: inline-block;
           min-width: 100px;
         }
         .el-textarea{
           margin-left: 15px;
         }
       }
     }
   }
   .pendingBookingOrdercontent1{
    background: white;
    min-height: 600px;
    padding: 20px;
    margin-top:20px;
    .title{
      overflow: hidden;
      img{
        float: left;
      }
      p{
        height: 25px;
        line-height: 24px;
        font-size: 1rem;
        margin: 0 0 0 40px;
        font-weight: 600;
        color: black;
      }
    }
    .item{
      padding:20px 0 0 0;
      .port{
        font-size: 0.875rem;
        padding: 0 0 10px 0;
        p{
          min-width: 100px;
          display: inline-block;
        }
      }
      .address{
        display: flex;
        font-size: 1rem;
        padding: 0 0 10px 0;
        .star{
          color: red;
        }
        .address-title{
          padding:10px 0;
          p{
            min-width: 100px;
            line-height: 40px;
            color:#4A3F91 ;
          }
        }
        .address-form{
          width: 100%;
          padding: 10px;
          .address-details{
            line-height: 40px;
            .title{
              min-width: 100px;
            }
          }
          .address-note{
            line-height: 40px;
          }
          .address-contact{
            line-height: 40px;
          }
          .address-time{
            display: flex;
            line-height: 40px;
            .el-input{
              display: inline-block;
              width: 50px;
            }
            .item-title{
              min-width: 100px;
            }
            .time-year{
              margin-right: 10px;
            }
          }
        }

      }
      .lastest-time{
        line-height: 40px;
        font-size: 0.875rem;
        padding: 0 0 10px 0;
        p{
          min-width: 100px;
          display: inline-block;
        }
        .el-input__prefix{
          left: unset;
          right: -55px;
        }
        .el-input{
          display: inline-block;
          width: 50px;
          margin:0 10px;
        }
        .el-date-editor{
          display: inline-block;
          width: 150px;
        }
        .open-time{
          width: 40%;
          min-width: 427px;
          display: inline-block;
        }
        .close-time{
            width: 40%;
          min-width: 427px;
            display: inline-block;
        }
      }
      .po-code{
        display: flex;
        padding: 0 0 10px 0;
        font-size: 0.875rem;
        p{
          min-width: 100px;
          line-height: 40px;
        }
        .el-input{
          width: 26%;
          margin-left: 10px;
        }
      }
      .VGM-code{
        display: flex;
        padding: 0 0 10px 0;
        font-size: 0.875rem;
        p{
          min-width: 100px;
          line-height: 40px;
        }
        .el-select{
          margin-left: 10px;
          width: 26%;
        }
      }
      .position-code{
        display: flex;
        padding: 0 0 10px 0;
        font-size: 0.875rem;
        p{
          min-width: 100px;
          line-height: 40px;
        }
        span{
          color: red;
        }
        .el-select{
          width: 26%;
        }
      }
      .twoarea-code{
        display: flex;
        padding: 0 0 10px 0;
        font-size: 0.875rem;
        p{
          min-width: 100px;
          line-height: 40px;
        }
        .el-select{
          margin-left: 10px;
          width: 26%;
        }
      }
      .notes{
        display: flex;
        padding: 0 0 10px 0;
        font-size: 0.875rem;
        p{
          min-width: 100px;
          line-height: 40px;
        }
        .notes-content{
          // display: flex;
          width: 100%;
          overflow: hidden;
          .notes-textarea{
            width: 40%;
            float: left;
            margin: 0 40px 0 10px;
          }
          .notes-select{
            width: 50%;
            float: left;
            .grid-content{
              border:1px solid #ddd;
              margin: 0px 0 8px 0;
              .icon-radio-checked{
                font-size: 14px;
                margin:0 3px;
                color: #4A3F91;
              }
            }
          }
        }
      }
      .clearance{
        padding: 0 0 10px 0;
        font-size: 0.875rem;
        .grid-content{
          i{
            font-size: 25px;color: #4A3F91;
          }
          .clearance-title{
            font-size: 1.2rem;
            font-weight: 600;
          }
          .clearance-adress{
            margin-left: 32px;
            font-size: 1rem;
            padding: 10px 0;
          }
        }
      }
    }
  }
   .pendingBookingOrdercontent2{
     background: white;
     padding:20px 20px 60px 20px;
     margin-top:20px;
     .title{
       overflow: hidden;
       img{
         float: left;
       }
       p{
         height: 25px;
         line-height: 24px;
         font-size: 1rem;
         margin: 0 0 0 40px;
         font-weight: 600;
         color: black;
       }
     }
     .item{
       .dingchuancount{
         font-size: 0.875rem;
         margin:10px 0 0 0;
         .dingchuancount-title{
           color:#4A3F91;
           font-weight: 600;
         }
         .dingchuancount-content{
           margin:10px 0 20px 0 ;
           .grid-content{
             margin:0 0 10px 0;
           }
         }
       }
       .tuochecount{
         font-size: 0.875rem;
         margin:10px 0 30px 0;
         border-bottom: 3px solid #E6E6E6;
         .tuochecount-title{
           color:#4A3F91;
           font-weight: 600;
         }
         .tuochecount-content{
           margin:10px 0 20px 0 ;
           .grid-content{
             margin:0 0 10px 0;
           }
         }
       }
       .count{
         .grid-content{
           font-size: 1rem;
           img{
             float: left;
           }
           p{
             height: 30px;
             line-height: 30px;
             margin-left: 40px;
             font-size: 1.2rem;
             font-weight: 600;
           }
           span{
             color: #F08619;
             font-weight: 600;
           }
         }
       }
     }
   }
   .code{
      margin:50px 0 0 0 ;
      .code-input{
        overflow: hidden;
        margin:0px 0 10px 0;
        .el-input{
          float: left;
          width: 200px;
          .el-input__inner{
            border-radius: unset;
          }
        }
        .codetext{
          background: #D6D6E2;
          margin-left: 200px;
          width: 100px;
          text-align: center;
          line-height: 40px;
          height: 40px;
          font-weight: 600;
          font-size: 1.1rem;
        }
    }
      .code-xieyi{
        font-size: 0.875rem;
        margin:10px 0 0 0;
        cursor: pointer;
        .agree{
          color: #4A3F91;
        }
      }
  }
   .okbtn{
      margin: 50px 0;
      text-align: center;
      display: flex;
      line-height: 50px;
      height: 50px;
      .left-hr{
        width: 40%;
        margin-top: 25px;
        height: 1px;
      }
      .okbtn-btn{
        width: 200px;
        margin: 0 20px;
        background: #F08619;
        color: white;
        font-size: 1.2rem;
      }
      .right-hr{
        width: 40%;
        margin-top: 25px;
        height: 1px;
      }
    }
</style>
<style lang="scss">
  .pendingBookingOrdercontent{
    .item{
      .product-details{
        .product-details-items{
          .product-details-content{
            .el-input{
              .el-input__inner{
                text-align: center;
              }
            }
          }
        }

      }
    }
  }
  .lastest-time{
    .el-input__prefix{
      left: unset;
      right: 0px;
    }
  }
  .code{
    .code-input{
      .el-input{
        .el-input__inner{
          border-radius: 0;
        }
      }
    }
  }
</style>
<template>
  <div>
    <!-- <div class="pageouter"></div> -->
    <div class="layout">
      <div  class="pendingBookingOrdercontent">
        <div class="title">
          <img src="../../assets/img/chuang.png" height="22" width="21"/>
          <p>订舱信息</p>
        </div>
        <div class="item">
          <div class="port">
            <p>起始港：</p>  <span>SHEN ZHEN · CHINA 深圳</span>
          </div>
          <div class="port">
            <p>目的港：</p>  <span>ROTTERDAM · NETHERLAND</span>
          </div>
          <div class="chuandong">
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple">
                <p>船东：</p>  <span>MAERSK</span>
              </div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple">
                <p>船名/航次：</p>  <span>VSL/VOY:MOGENS MAERSK/828W</span>
              </div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple">
                <p>航班代码：</p>  <span>AE1</span>
              </div></el-col>
            </el-row>
          </div>
          <div class="port">
            <p>运输方式：</p>  <span>海运</span>
          </div>
          <div class="port">
            <p>中转方式：</p>  <span>直达</span>
          </div>
          <div class="port">
            <p>行程：</p>  <span>23天</span>
          </div>
          <div class="port">
            <p>开始时间：</p>  <span>2018-6-29</span>
          </div>
          <div class="product-details">
            <p class="title">货箱详情:</p>
            <div class="product-details-items">
              <div class="product-details-content">
                <p>1X20'GD</p>  <span>单箱重量:</span> <el-input v-model="input" placeholder="请输入内容"></el-input> <span>KG</span>
              </div>
              <div class="product-details-content">
                <p>1X20'GD</p>  <span>单箱重量:</span> <el-input v-model="input" placeholder="请输入内容"></el-input> <span>KG</span>
              </div>
              <div class="product-details-content">
                <p>1X20'GD</p>  <span>单箱重量:</span> <el-input v-model="input" placeholder="请输入内容"></el-input> <span>KG</span>
              </div>
              <div class="product-details-content">
                <p>1X20'GD</p>  <span>单箱重量:</span> <el-input v-model="input" placeholder="请输入内容"></el-input> <span>KG</span>
              </div>
            </div>
          </div>
          <div class="contact">
            <p>订舱联系人：</p>
            <div class="contact-form">
              <el-row :gutter="40">
                <el-col :span="6"><div class="grid-content bg-purple">
                  <span class="star">*</span><el-input v-model="input1" placeholder="姓名"></el-input>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                  <span class="star">*</span><el-input v-model="input1" placeholder="邮箱"></el-input>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                  <span class="star">*</span><el-input v-model="input1" placeholder="电话"></el-input>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                  <span class="star">*</span><el-input v-model="input1" placeholder="手机"></el-input>
                </div></el-col>
              </el-row>
            </div>
          </div>
          <div class="box-attribute">
            <p>箱属性：</p>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="characteristics">
            <p>货物特征：</p>
            <el-select v-model="value2" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-input v-model="input2" placeholder="非普通货物必须输入货物描述"></el-input>
          </div>
          <div class="scn">
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple">
                <p>Shipper:</p>
                <span class="star">*</span>
                <el-input  type="textarea" :rows="6" v-model="input1" ></el-input>
              </div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple">
                <p>Cosignee:</p>
                <span class="star">*</span>
                <el-input type="textarea" :rows="6" v-model="input1" ></el-input>
              </div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple">
                <p>Notify party:</p>
                <span class="star">*</span>
                <el-input type="textarea" :rows="6" v-model="input1"></el-input>
              </div></el-col>
            </el-row>
          </div>
          <div class="orderInfo">
            <p>其他信息：</p>
            <div class="orderInfo-form">
              <el-row>
                <el-col :span="6"><div class="grid-content bg-purple">
                  <span class="star">*</span>
                  <el-select v-model="value" placeholder="提单类型">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                  <span class="star">*</span>
                  <el-select v-model="value" placeholder="运输条款">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                  <el-input v-model="input" placeholder="电话"></el-input>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                  <el-input v-model="input" placeholder="手机"></el-input>
                </div></el-col>
              </el-row>
            </div>
          </div>
          <div class="goodsInfo">
            <p>货物信息：</p>
            <div class="goodsInfo-form">
              <el-row>
                <el-col :span="6"><div class="grid-content bg-purple">
                  <el-input v-model="input" placeholder="货物准备好日期"></el-input>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                  <el-input v-model="input" placeholder="包装种类"></el-input>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                  <el-input v-model="input" placeholder="总重量"></el-input>
                  <span class="ties">KG</span>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                  <el-input v-model="input" placeholder="总尺寸"></el-input>
                  <span class="ties" >CBM</span>
                </div></el-col>
              </el-row>
            </div>
          </div>
          <div class="description">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="唛头"
              v-model="textarea">
            </el-input>
            <el-input
              type="textarea"
              :rows="4"
              placeholder="货物描述"
              v-model="textarea">
            </el-input>
          </div>
          <div class="note">
            <p>备注：</p>
            <el-input
              type="textarea"
              :rows="6"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
          </div>
        </div>
      </div>
      <div  class="pendingBookingOrdercontent1">
      <div class="title">
        <img src="../../assets/img/tuoche.jpg" height="20" width="31"/>
        <p>拖车信息</p>
      </div>
      <div class="item">
        <div class="port">
          <el-row>
            <el-col :span="8"><div class="grid-content bg-purple">
              <p>货重：</p>
              <el-select v-model="value" placeholder="请选择货重">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
              <p>是否平台约柜：</p>
              <el-select v-model="value" placeholder="请选择约柜方式">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div></el-col>
          </el-row>
        </div>
        <div class="address">
          <div class="address-title">
            <p> 拖柜地点1：</p>
          </div>
          <div class="address-form">
            <div class="address-details"><span class="title"></span> 工厂详细地址：<span class="star">*</span> <span>广东省 佛山市 三水区 大塘村</span> <span>大河街114号国际大厦</span></div>
            <div class="address-note">备注：</div>
            <div class="address-contact">
              <el-row>
                <el-col :span="8"><div class="grid-content bg-purple">
                  工厂名称：<span class="star">*</span> <span>佛山市纳信工厂</span>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                  工厂联系人：<span class="star">*</span> <span>李四</span>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                  联系电话/手机：<span class="star">*</span> <span>13535924294</span>
                </div></el-col>
              </el-row>
            </div>
            <div class="address-time">
              <span class="item-title">装货时间：</span>
              <span class="star">*</span>
              <span class="time-year">2018-6-30</span>
              <el-input v-model="input" placeholder="时"></el-input>
              :<el-input v-model="input" placeholder="分"></el-input>
            </div>
          </div>
        </div>
        <div class="address">
          <div class="address-title">
            <p> 拖柜地点2：</p>
          </div>
          <div class="address-form">
            <div class="address-details"><span class="title"></span> 工厂详细地址：<span class="star">*</span> <span>广东省 佛山市 三水区 大塘村</span> <span>大河街114号国际大厦</span></div>
            <div class="address-note">备注：</div>
            <div class="address-contact">
              <el-row>
                <el-col :span="8"><div class="grid-content bg-purple">
                  工厂名称：<span class="star">*</span> <span>佛山市纳信工厂</span>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                  工厂联系人：<span class="star">*</span> <span>李四</span>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                  联系电话/手机：<span class="star">*</span> <span>13535924294</span>
                </div></el-col>
              </el-row>
            </div>
            <div class="address-time">
              <span class="item-title">装货时间：</span>
              <span class="star">*</span>
              <span class="time-year">2018-6-30</span>
              <el-input v-model="input" placeholder="时"></el-input>
              :<el-input v-model="input" placeholder="分"></el-input>
            </div>
          </div>
        </div>
        <div class="lastest-time">
          <p>最迟补料时间：</p>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="日期">
          </el-date-picker>
          <el-input v-model="input" placeholder="时"></el-input>
          :<el-input v-model="input" placeholder="分"></el-input>
        </div>
        <div class="lastest-time">
          <div class="open-time">
            <p>开仓时间：</p>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="日期">
            </el-date-picker>
            <el-input v-model="input" placeholder="时"></el-input>
            :<el-input v-model="input" placeholder="分"></el-input>
          </div>
          <div class="close-time">
            <p>截关时间：</p>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="日期">
            </el-date-picker>
            <el-input v-model="input" placeholder="时"></el-input>
            :<el-input v-model="input" placeholder="分"></el-input>
          </div>

        </div>
        <div class="po-code">
          <p>PO编号:</p>
          <el-input v-model="input" placeholder="PO编号"></el-input>
        </div>
        <div class="VGM-code">
          <p>VGM：</p>
          <el-select v-model="value" placeholder="请选泽VGM申报方式">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="position-code">
          <p>摆放位置：</p>
          <span>*</span>
          <el-select v-model="value3" placeholder="选泽20'GP柜摆放方式">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="twoarea-code">
          <p>两地装货：</p>
          <el-select v-model="value3" placeholder="请选泽">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="notes">
          <p>备注：</p>
          <div class="notes-content">
            <div class="notes-textarea">
              <el-input
                type="textarea"
                :rows="5"
                placeholder=""
                v-model="textarea">
              </el-input>
            </div>
            <div class="notes-select">
              <el-row :gutter="10">
                <el-col :span="8"><div class="grid-content bg-purple">
                  <div><i class="icon iconfont icon-radio-checked"></i>一定要记得熏蒸</div>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                  <div><i class="icon iconfont icon-radio-checked"></i>转关柜请记得带司机本</div>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                  <div><i class="icon iconfont icon-radio-checked"></i>转关柜请记得带司机本</div>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                  <div><i class="icon iconfont icon-radio-checked"></i>一定要记得熏蒸</div>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                  <div><i class="icon iconfont icon-radio-checked"></i>转关柜请记得带司机本</div>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                  <div><i class="icon iconfont icon-radio-checked"></i>转关柜请记得带司机本</div>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                  <div><i class="icon iconfont icon-radio-checked"></i>一定要记得熏蒸</div>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                  <div><i class="icon iconfont icon-radio-checked"></i>转关柜请记得带司机本</div>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                  <div><i class="icon iconfont icon-radio-checked"></i>转关柜请记得带司机本</div>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                  <div><i class="icon iconfont icon-radio-checked"></i>一定要记得熏蒸</div>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                  <div><i class="icon iconfont icon-radio-checked"></i>转关柜请记得带司机本</div>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                  <div><i class="icon iconfont icon-radio-checked"></i>转关柜请记得带司机本</div>
                </div></el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="clearance">
          <el-row>
            <el-col :span="6"><div class="grid-content bg-purple">
              <div class="clearance-title"> <i class="el-icon-location"></i> 报关地点</div>
              <div class="clearance-adress"><span>广东省</span><span>深圳市</span></div>
            </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">
            </div></el-col>
          </el-row>
        </div>
      </div>
    </div>
      <div  class="pendingBookingOrdercontent2">
        <div class="title">
          <img src="../../assets/img/oktitle.png" height="28" width="30"/>
          <p>确认费用信息</p>
        </div>
        <div class="item">
          <div class="dingchuancount">
              <div class="dingchuancount-title">订舱费用</div>
              <div class="dingchuancount-content">
                <el-row>
                  <el-col :span="6"><div class="grid-content bg-purple">
                    海运费：20'GP:USD 315×1
                  </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">
                    紧急燃油附加费20'GP：USD 60×1
                  </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">
                    OHC 20'GP:CNY 565×1
                  </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">
                    封条费 20'GP:CNY 50×1
                  </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">
                    单运费：CNY 450×1
                  </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">
                    VGM 20'GP：CNY 20×1
                  </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">
                    订舱操作费20'GP：USD 10×1
                  </div></el-col>
                </el-row>
              </div>
            </div>
          <div class="tuochecount">
            <div class="tuochecount-title">拖车费用</div>
            <div class="tuochecount-content">
              <el-row>
                <el-col :span="6"><div class="grid-content bg-purple">
                  拖车费:
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                  拖车服务费:
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                  报关服务费:
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">
                  联单费:
                </div></el-col>
              </el-row>
            </div>
          </div>
          <div class="count">
            <el-row>
              <el-col :span="6"><div class="grid-content bg-purple">
                <img src="../../assets/img/qian.png" height="30" width="31"/>
                <p>实际费用总计</p>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">
                <span>USD 1066 起</span>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">
                <span>CNY 1255</span>
              </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="code">
        <div class="code-xieyi" @click="agreebtn">
          <i v-show="!agree" class="el-icon-circle-check-outline"></i>
          <i v-show="agree" class="el-icon-circle-check agree agree"></i>
          <span :class="{'agree':agree}">我已阅读并同意《纳信物流综合服务委托协议》</span>
        </div>
      </div>
      <div class="okbtn">
        <hr class="left-hr">
        <el-button class="okbtn-btn">确认委托</el-button>
        <hr class="right-hr">
      </div>
    </div>
    <!-- <div class="pageouter"></div> -->
  </div>
</template>
<script>
  export default {
    name:'pendingBookingOrderContent',
    data(){
      return{

        agree:false,
        code:'DIFJ',
        codevalue:'',
        input:0,
        input1:'',
        input2:'',
        value:'COC',
        value3:'',
        value1:'',
        value2:'普通货',
        options:[
          {value: 'COC', label: 'COC'},
          {value: 'COC1', label: 'COC1'},
          {value: 'COC2', label: 'COC2'},
          {value: 'COC3', label: 'COC3'},
          {value: 'COC4', label: 'COC4'},
        ],
        options2:[
          {value: '普通货', label: '普通货'},
          {value: '普通货1', label: '普通货1'},
          {value: '普通货2', label: '普通货2'},
          {value: '普通货3', label: '普通货3'},
          {value: '普通货4', label: '普通货4'},
        ],
        textarea:'',
      }
    },
    methods:{
      agreebtn(){
        this.agree =!this.agree;
      }
    },
    mounted(){

    }
  }
</script>

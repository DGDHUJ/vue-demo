<template>
  <div>
    <topheader/>
    <contentheader/>
    <div>
      <!-- <div class="pageouter"></div> -->
      <div class="layout" >
        <!--面包屑-->
        <div class="orderConfirm-tab" style="line-height: 50px;height: 50px">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height: 50px;height: 50px">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ name: 'member-menberHome' }">会员中心</el-breadcrumb-item>
            <el-breadcrumb-item>代理出口</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!--内容-->
        <div v-if="!showsuccess"  class="form1">
          <div class="title">
            <img src="../assets/img/852.png" height="23" width="24"/>
            <p class="p1">出口代理委托</p>
            <p class="p2" @click="gohuiyuancentre">停止下单，返回会员中心</p>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>PO号：</span>
            </p>
            <el-input v-model="ponum" class="shuru"></el-input>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>合同协议号：</span>
            </p>
            <el-input v-model="agreement" class="shuru"></el-input>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>买家名称：</span>
            </p>
            <el-input v-model="buyer_name" class="shuru"></el-input>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>买家国家：</span>
            </p>
            <el-select class="shuru"  v-model="maijiacoutry" placeholder="请选择">
              <el-option
                v-for="item in country"
                v-if="item!==null"
                :key="item.id"
                :label="item.cn_name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>贸易国：</span>
            </p>
            <el-select class="shuru"  v-model="maoyicountry" placeholder="请选择">
              <el-option
                v-for="item in country"
                v-if="item!==null"
                :key="item.id"
                :label="item.cn_name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>运输方式：</span>
            </p>
            <el-input v-model="transport_type" class="shuru"></el-input>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>境内货源地：</span>
            </p>
            <el-input v-model="original_place" class="shuru"></el-input>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>起运港：</span>
            </p>
            <el-input v-model="pol_port" class="shuru"></el-input>
           
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>运抵国：</span>
            </p>
            <el-select class="shuru"  v-model="yundicoutry" placeholder="请选择">
              <el-option
                v-for="item in country"
                v-if="item!==null"
                :key="item.id"
                :label="item.cn_name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>目的港：</span>
            </p>
            <el-input v-model="pod_port" class="shuru"></el-input>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>装柜地址：</span>
            </p>
            <el-input v-model="load_address" class="shuru"></el-input>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>装柜时间：</span>
            </p>
            <el-date-picker
              class="shuru"
              v-model="zhuangguidate"
              type="datetime"
              placeholder="选择日期">
            </el-date-picker>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>付款方式：</span>
            </p>
            <el-select class="shuru"  v-model="payways" placeholder="请选择">
              <el-option
                v-for="item in paywaysoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>价格条款：</span>
            </p>
            <el-select class="shuru"  v-model="priceways" placeholder="请选择">
              <el-option
                v-for="item in pricewaysoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>包装种类：</span>
            </p>
            <el-input v-model="pack_type" class="shuru"></el-input>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span></span>
              <span>封条号：</span>
            </p>
            <el-input v-model="seal_num" class="shuru"></el-input>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span></span>
              <span>集装箱柜号：</span>
            </p>
            <el-input v-model="container_num" class="shuru"></el-input>
          </div>
          <div class="form-item" style="position: relative">
            <p class="form-item-text">
              <span></span>
              <span>关联货代服务：</span>
            </p>
            <el-input v-model="third_order_sn" class="shuru" placeholder="请输入货代服务订单编号"></el-input>
            <div @mouseover.stop="_showties" @mouseout.stop="_hideties" class="showi-outer"></div>
            <i  class="showi iconfont el-icon-question"></i>
            <div class="showties" v-if="showties"><img src="../assets/img/zhanshi.png" height="437" width="853"/></div>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>备注：</span>
            </p>
            <el-input
              class="shuru1"
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
          </div>
          <div class="form-item">
            <p class="form-item-text">
              <span>*</span>
              <span>导入报告单：</span>
            </p>
            <div class="downloadmodel" >下载报关单明细模板</div>
            <div class="loadinmodel-out">
              <label class="loadinmodel ui_button ui_button_primary" for="weituoshu">导入报关单明细</label>
              <form><input type="file" @change="_loadupdate" id="weituoshu" class="inputshow"/></form>
            </div>
            <div class="item-dan" v-if="showjindu">
              <el-progress class="jindutiao" :percentage="jindu"></el-progress>
            </div>
            <div class="item-dan" v-if="!showjindu&&jindu===100">{{customs_file_name}}</div>
          </div>
        </div>
        <div v-if="!showsuccess" class="form2">
          <div class="title">
            <p><span>*</span>出口商品明细:</p>
          </div>
          <div class="table">
           <div class="form-header">
             <div class="header-item">操作</div>
             <div class="header-item">唛头</div>
             <div class="header-item">商品编码</div>
             <div class="header-item">开票工厂</div>
             <div class="header-item">税号</div>
             <div class="header-item">货物名称</div>
             <div class="header-item">毛重</div>
             <div class="header-item">净重</div>
             <div class="header-item">体积</div>
             <div class="header-item">数量</div>
             <div class="header-item">单位</div>
             <div class="header-item">单价</div>
             <div class="header-item">币制</div>
             <div class="header-item">包装件数</div>
             <div class="header-item">申报要素</div>
             <div class="header-item">报关金额</div>
           </div>
           <div class="form-content">
             <div class="line1" v-for="(item,index) in goods_list" :key="index">
               <div class="line-item" @click="reduceline(index)">删除</div>
               <div class="line-item"><input class="tableinput" v-model="item.mark" ></div>
               <div class="line-item"><input class="tableinput" v-model="item.goods_sn" ></div>
               <div class="line-item"><input class="tableinput" v-model="item.ticket_factory" ></div>
               <div class="line-item"><input class="tableinput" v-model="item.duty_paragraph" ></div>
               <div class="line-item"><input class="tableinput" v-model="item.goods_name" ></div>
               <div class="line-item"><input class="tableinput" type="number" v-model="item.rough_weight" ></div>
               <div class="line-item"><input class="tableinput" type="number" v-model="item.net_weight" ></div>
               <div class="line-item"><input class="tableinput" type="number" v-model="item.volume" ></div>
               <div class="line-item"><input class="tableinput" type="number" v-model="item.num" ></div>
               <div class="line-item"><input class="tableinput" v-model="item.unit" ></div>
               <div class="line-item"><input class="tableinput" type="number" v-model="item.price" ></div>
               <div class="line-item">
                 <el-select  v-model="currency" placeholder="USD">
                   <el-option
                     v-for="item in bizhioptions"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
                   </el-option>
                 </el-select>
               </div>
               <div class="line-item"><input class="tableinput" type="number" v-model="item.package_num" ></div>
               <div class="line-item"><input class="tableinput" v-model="item.declare_element" ></div>
               <div class="line-item"><div class="tableinput">{{comment.jisuan(item.price,item.num)}}</div></div>
             </div>
             <div class="line3">
               <div class="line3-item" @click="addNewline">新增一行</div>
               <div class="line3-item">小计</div>
               <div class="line3-item">-</div>
               <div class="line3-item">-</div>
               <div class="line3-item">-</div>
               <div class="line3-item">-</div>
               <div class="line3-item">{{count('rough_weight')}}</div>
               <div class="line3-item">{{count('net_weight')}}</div>
               <div class="line3-item">{{count('volume')}}</div>
               <div class="line3-item">{{count('num')}}</div>
               <div class="line3-item">-</div>
               <div class="line3-item">-</div>
               <div class="line3-item">-</div>
               <div class="line3-item">{{count('package_num')}}</div>
               <div class="line3-item">-</div>
               <div class="line3-item">{{count('zongjia')}}</div>
             </div>
           </div>
          </div>
          <hr class="hr">
          <div class="btn-ground">
            <div class="okbtn" @click="postorder"> 确定订单</div>
            <div class="backbtn" @click="gohuiyuancentre">停止下单，返回会员中心</div>
          </div>
        </div>
        <div v-if="showsuccess" class="form3">
          <div class="title">
            <img src="../assets/img/852.png" height="23" width="24"/>
            <p class="p1">出口代理委托</p>
          </div>
          <div class="form3-content">
            <p>委托下单成功！</p>
            <p>您或许还需要以下服务，</p>
            <p>了解一下？</p>
            <div class="two-way">
              <div class="two-way-tab">
                <img src="../assets/img/form3-02.jpg" height="48" width="53"/>
                <div class="two-way-tab-text" @click="godingcang">海运订舱</div>
              </div>
              <div class="two-way-tab">
                <img src="../assets/img/form3-01.jpg" height="48" width="48"/>
                <div class="two-way-tab-text" @click="gobaoguan">拖车报关</div>
              </div>
            </div>
            <p @click="gohuiyuancentre">回到会员中心</p>
            <p>{{second}}秒后进入订单详情 <span @click="godetail">立即进入</span></p>
          </div>
        </div>
      </div>
      <!-- <div class="pageouter"></div> -->
    </div>
    <homeguarantees/>
    <webfooter/>
  </div>
</template>
<script>
  import topheader from '../components/comment/topheader.vue'
  import webfooter from '../components/comment/webfooter.vue'
  import contentheader from '../components/comment/contentheader.vue'
  import homeguarantees from '../components/home/homeguarantees.vue'
  export default {
    name:'agentOutlet',
    components:{
      topheader:topheader,
      contentheader:contentheader,
      homeguarantees:homeguarantees,
      webfooter:webfooter
    },
    data(){
      return{
        countmaozhong:null,
        countjinzhong:null,
        counttiji:null,
        countnum:null,
        countjiannum:null,
        countcustoms_sum:null,

        showsuccess:false,
        ponum:null,
        paywaysoptions:[
          {
            value: 'T/T(电汇)',
            label: 'T/T(电汇)'
          },
          {
            value: 'LC(信用证)',
            label: 'LC(信用证)'
          },
          {
            value: '定金T/T,余额LC',
            label: '定金T/T,余额LC'
          },
        ],
        maijiacoutry: '',
        maoyicountry: '',
        yundicoutry: '',
        zhuangguidate: '',
        payways: '',
        priceways: '',
        textarea: '',
        bizhong: '',
        bizhioptions: [{
          value: 'USD',
          label: 'USD'
        }, {
          value: 'EUR',
          label: 'EUR'
        }, {
          value: 'GBP',
          label: 'GBP'
        }],
        pricewaysoptions: [{
          value: 'FOB',
          label: 'FOB'
        }, {
          value: 'CIF',
          label: 'CIF'
        }],
        second:5,
        showties:false,
        city:[],
        showchoosecity:false,
        iskey2:false,
        iskey:false,
        tanguangid1:null,  //选中城市id
        loading:false,
        port1:[],
        keyport1:[],
        showqiyungang:'',
        showmudegang:'',
        mudigan:false,
        shipping_route:[],
        mudegangshuju:[],
        keyport2:[],
        country:[],
        qiyungang:{},//起运港绑定值
        mudegang:{},//目的港绑定值
        agreement:null,
        buyer_name:null,
        transport_type:null,
        original_place:null,
        pack_type:null,
        seal_num:null,
        container_num:null,
        third_order_sn:null,
        customs_file:null,
        customs_file_name:null,
        pol_port:null,
        pod_port:null,
        load_address:null,
        goods_list:[
          {
            mark: "",
            goods_sn: "",
            ticket_factory: "",
            duty_paragraph: "",
            goods_name: "",
            rough_weight: "",
            net_weight: "",
            volume: "",
            num: null,
            unit: "",
            currency: "USD",
            package_num: null,
            declare_element: "",
            customs_sum: null,
            price:null,
          }
        ],//出口商品明细
        currency:'USD',
        showjindu:false,
        jindu:0,
        finish_id:null,
      }
    },
    methods:{
      count(type){
        let countmaozhong  = null;
        let countjinzhong  = null;
        let counttiji  = null;
        let countnum  = null;
        let countjiannum  = null;
        let countcustoms_sum  = null;
        for(let i = 0;i<this.goods_list.length;i++){
          countmaozhong  = countmaozhong + Number(this.goods_list[i].rough_weight);
          countjinzhong  = countjinzhong + Number(this.goods_list[i].net_weight);
          counttiji  = counttiji + Number(this.goods_list[i].volume);
          countnum  = countnum + Number(this.goods_list[i].num);
          countjiannum  = countjiannum + Number(this.goods_list[i].package_num);
          countcustoms_sum  = countcustoms_sum + Number(this.comment.jisuan(this.goods_list[i].price,this.goods_list[i].num));
        }
        if(type === 'rough_weight'){
          if(countmaozhong === 0){
            return null
          }else{
            return countmaozhong
          }

        }
        if(type === 'net_weight'){
          if(countjinzhong === 0){
            return null
          }else{
            return countjinzhong
          }
        }
        if(type === 'volume'){
          if(counttiji === 0){
            return null
          }else{
            return counttiji
          }
        }
        if(type === 'num'){
          if(countnum === 0){
            return null
          }else{
            return countnum
          }
        }
        if(type === 'package_num'){
          if(countjiannum === 0){
            return null
          }else{
            return countjiannum
          }
        }
        if(type === 'zongjia'){
          if(countcustoms_sum === 0){
            return null
          }else{
            return countcustoms_sum
          }
        }

      },
    //导入明细
      _loadupdate(e){
        const jsonUsers = localStorage.getItem('token');
        this.jindu = 0;
        this.showjindu = true;
        let file = e.target.files[0];
        let d = new Date();
        let type = e.target.files[0].name.split('.');
        let tempvalue = ''
        this.comment.getfile_md5(file,function (resp) {
          tempvalue = resp + '.' + type[type.length - 1];
        })

        let times = 1
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
            param.append('file',file,file.name,putExtra)
            param.append('key', tempvalue)
            //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
              onUploadProgress: progressEvent => {
                var complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
                this.jindu = complete
              },
              headers:{'Content-Type':'multipart/form-data'},
              useCdnDomain: true,
              disableStatisticsReport: false,
              retryCount: 6,
            };
            //先从自己的服务端拿到七牛token
            this.$axios.get(this.$store.state.headerUrl+'qiniu_token',{
              headers:{
                token:jsonUsers
              }
            })
              .then(response=>{
                this.token = response.data.data.token;
                this.showHeader =  response.data.data.domain;
                param.append('token',this.token);
                this.uploading1(param,config,file.name,file,putExtra);//然后将参数上传七牛
              })
          }
        }, 1000)
      },
      //七牛上传图片
      uploading1 (param,config,pathName,file,putExtra){
        let that = this;
        that.$axios.post('http://upload-as0.qiniup.com/',param,config,file,putExtra)
          .then(response=>{
            that.customs_file_name = pathName;
            that.customs_file = that.showHeader+response.data.key;
            that.showjindu = false;
          })
      },

      //新增一行
      addNewline(){
        let temlength = this.goods_list.length -1;
        this.goods_list.push(
          {
            mark: "",
            goods_sn: "",
            ticket_factory: "",
            duty_paragraph: "",
            goods_name: "",
            rough_weight: "",
            net_weight: "",
            volume: "",
            num: null,
            unit: "",
            currency: this.currency,
            package_num: null,
            declare_element: "",
            customs_sum: null,
            price:null,
          }
        )
      },
      reduceline(index){
        this.goods_list.splice(index,1)
      },
      //下单
      postorder(){
        let that = this;
        let url = that.$store.state.headerUrl + 'export_agent_order';
        let tempalert = that.$alert;
        if(that.ponum ===null){
          tempalert('请输入PO单号', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.load_address ===null){
          tempalert('请输入装货地址', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.zhuangguidate ===''){
          tempalert('请输入装柜时间', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.agreement ===null){
          tempalert('请输入合同协议号', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.buyer_name ===null){
          tempalert('请输入买家名称', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.maijiacoutry ===''){
          tempalert('请输入买家国家', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.maoyicountry ===''){
          tempalert('请输入贸易国', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.transport_type ===null){
          tempalert('请输入运输方式', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.original_place ===null){
          tempalert('请输入境内货源地', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.pol_port ===null){
          tempalert('请输入起运港', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.pod_port ===null){
          tempalert('请输入目的港', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.yundicoutry ===''){
          tempalert('请输入运抵国', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.payways ===''){
          tempalert('请输入付款方式', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.priceways ===''){
          tempalert('请输入价格条款', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.pack_type ===null){
          tempalert('请输入包装种类', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        if(that.customs_file ===null){
          tempalert('请导入报关单明细', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return
        }
        for(let i = 0; i<that.goods_list.length;i++){
          if(that.goods_list[i].mark === ''){
            tempalert('请输入唛头', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
          if(that.goods_list[i].goods_sn === ''){
            tempalert('请输入商品编码', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
          if(that.goods_list[i].ticket_factory === ''){
            tempalert('请输入开票工厂', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
          if(that.goods_list[i].duty_paragraph === ''){
            tempalert('请输入税号', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
          if(that.goods_list[i].goods_name === ''){
            tempalert('请输入货物名称', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
          if(that.goods_list[i].rough_weight === ''){
            tempalert('请输入毛重', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
          if(that.goods_list[i].net_weight === ''){
            tempalert('请输入净重', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
          if(that.goods_list[i].volume === ''){
            tempalert('请输入体积', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
          if(that.goods_list[i].num === null){
            tempalert('请输入数量', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
          if(that.goods_list[i].unit === ''){
            tempalert('请输入单位', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
          if(that.goods_list[i].currency === ''){
            tempalert('请输入币制', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
          if(that.goods_list[i].package_num === null){
            tempalert('请输入包装件数', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
          if(that.goods_list[i].declare_element === ''){
            tempalert('请输入申报要素', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
          if(that.goods_list[i].price === null){
            tempalert('请输入单价', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
        }
        that.goods_list.forEach(function (item,index) {
          item.num = Number(item.num);
          item.package_num = Number(item.package_num);
          item.price = Number(item.price);
          item.customs_sum = that.comment.jisuan(item.price,item.num);
        })
        let params = {
          po_num: that.ponum,
          load_address: that.load_address,
          agreement: that.agreement,
          buyer_name: that.buyer_name,
          buyer_country_id: that.maijiacoutry,
          trading_country_id: that.maoyicountry,
          transport_type: that.transport_type,
          original_place:that.original_place,
          pol_port: that.pol_port,
          pod_port: that.pod_port,
          arrival_country_id: that.yundicoutry,
          load_time: that.comment.formate('yyyy-MM-dd hh:mm:ss',new Date(that.zhuangguidate)),
          payment_type: that.payways,
          price_clause: that.priceways,
          pack_type: that.pack_type,
          seal_num: that.seal_num,
          container_num: that.container_num,
          third_order_sn: that.third_order_sn,
          comment: that.textarea,
          customs_file:that.customs_file,
          goods_list: that.goods_list
        }
        that.comment.axiosPost(url,that.$axios,that.$store,params,tempalert,that).then(function (resp) {
          if(resp.data.code === 0){
            tempalert(resp.data.msg, {
              confirmButtonText: '确定',
              callback: action => {
                that.showsuccess = true;
                that.finish_id = resp.data.data.id
                window.scrollTo( 0, 0 );
                window.setInterval(() => {
                  that.second--;
                  if (that.second === 0) {
                    that.showsuccess = false;
                    that.$router.push({name:'agentOutletDetail',query:{id:resp.data.data.id}})
                  }
                }, 1000)
              }
            });
          }else{
            tempalert(resp.data.msg, {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
            return
          }
        }).catch(function (error) {
          tempalert(error, {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
        })
      },
      gohuiyuancentre(){
        this.$router.push({name:'member-menberHome'})
      },
      godingcang(){
        this.$router.push({name:'cabinOffer'})
      },
      gobaoguan(){
        this.$router.push({name:'customs'})
      },
      _showties(){
        this.showties = true
      },
      _hideties(){
        this.showties = false
      },
      godetail(){
        this.$router.push({name:'agentOutletDetail',query:{id:this.finish_id}})
      }
    },
    mounted(){
      let that =this;
      //国家数据
      if(sessionStorage.getItem('countryData')){
        that.$store.state.countryData = JSON.parse(sessionStorage.getItem('countryData'));
      }else{
        that.comment.getcountry(that);
      }
      that.country = that.$store.state.countryData;
    },
    watch:{
      'currency':function (val) {
        for(var i = 0;i<this.goods_list.length;i++){
          this.goods_list[i].currency = val
        }
      },
    }
  }
</script>
<style scoped lang="scss">
  .form1{
    margin: 0 0 10px 0;background: white;padding: 20px 20px;
    .title{
      img{
        float: left
      }
      .p1{
        font-size: 18px; margin-left: 33px;font-weight: bolder;display: inline-block;
      }
      .p2{
        float: right;color: #F19031;font-size: 16px;font-weight: bold;cursor: pointer;
      }
      .p2:active{
        font-size: 17px;
      }
    }
    .form-item{
      position: relative;
      display: inline-block;
      margin-right:100px;
      margin-top: 20px;
      .form-item-text{
        float: left;height: 40px;line-height: 40px;width: 120px;
        span:nth-of-type(1){
          color: red;
        }
        span:nth-of-type(2){
          font-size: 16px;
        }
      }
      .shuru{
        width:250px;
      }
      .showi{
        cursor: pointer;
        margin-left: 20px;
        padding:10px;
      }
      .showi-outer{
        position: absolute;
        line-height: 30px;
        height: 36px;
        width: 36px;
        text-align: center;
        border-radius: 50%;
        margin-left: 20px;
        background: red;
        top: 0;
        left: 366px;
        opacity: 0;
        z-index: 9999;
        cursor: pointer;
      }
      .shuru1{
        width: 680px;
      }
      .downloadmodel{
        width:220px ;
        display: inline-block;
        text-align: center;
        border:1px solid #4A3F91;
        color: #4A3F91;
        line-height: 45px;
        height: 45px;
        font-size: 16px;
        cursor: pointer;
        font-weight: bold;
        border-radius: 5px;
      }
      .downloadmodel:active{
        font-size: 17px;
      }
      .loadinmodel-out{
        margin-left: 50px;
        display: inline-block;
        .loadinmodel{
          text-align: center;
          width:220px ;
          line-height: 45px;
          height: 45px;
          border:1px solid #F19031;
          color: #F19031;
          line-height: 45px;
          height: 45px;
          font-size: 16px;
          cursor: pointer;
          font-weight: bold;
          border-radius: 5px;
        }
        .loadinmodel:active{
          font-size: 17px;
        }
        .ui_button {
          border-radius: 5px;
          display: inline-block;
          line-height: 40px;
          padding: 0 40px;
          color: #F19031;
          font-weight: 700;
          cursor: pointer;
        }
        .ui_button_primary {
          border:1px solid #F19031;
          color: #F19031;
        }
        label.ui_button:hover {
          font-size: 17px;
        }
        .inputshow{
          position:absolute;clip:rect(0 0 0 0);
        }
      }
      .item-dan{
        display: inline-block;
        margin-left:20px;
        line-height: 45px;
        height: 45px;
        width: 100px;
        .jindutiao{
          width: 180px;padding-top: 20px;
        }
      }
      .showties{
        position: absolute;    top: -500px;right: -262px;border: 1px solid #ddd;background: white;padding: 20px;
      }
      .showties:before {
        content: '';
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-top-color: #cccccc;
        position: absolute;
        /*left: 100%;*/
        top: 100%;
        right: 31.2%;
        margin-right: -20px;
      }
      .showties:after {
        content: "";
        width: 0;
        height: 0;
        border: 18px solid transparent;
        border-top-color: #FFFFFF;
        position: absolute;
        top: 100%;
        right: 31.2%;
        margin-right: -18px;
      }
    }
  }
  .form2{
    margin: 0 0 10px 0;background: white;padding: 20px 20px;
    .title{
      p{
        font-size: 18px;font-weight: bolder;display: inline-block;
        span{
          color: red;
        }
      }
    }
    .table{
      width: 100%;
      overflow-x: scroll;
      margin-top:20px;
      .form-header{
        width:2080px;
        .header-item{
          /*display: inline-block;*/
          float: left;
          width:130px;
          text-align: center;
          border:0.5px solid #DDD;
          border-right: none;
          line-height: 40px;
          height: 40px;
          background:#4A3F91 ;
          color: white;
          font-size: 14px;
          font-weight: bold;
        }
      }
      .form-content{
        width:2080px;
        .line1{
          width:100%;
          overflow: hidden;
          .line-item{
            float: left;
            width:130px;
            text-align: center;
            border:0.5px solid #DDD;
            border-right: none;
            line-height: 42px;
            height: 42px;
            font-size: 14px;
          }
          .line-item:first-of-type{
            border-right: 0.5px solid #DDD;
            cursor: pointer;
            color: #24A7D3;
          }
          .line-item:last-of-type{
            border-right: 0.5px solid #DDD;
          }
          .line-item:first-of-type:active{
            font-size: 16px;
          }
          .tableinput{
            border-radius: 0;
            border: none;
            line-height: 40px;
            height: 40px;
            width: 128px;
            /*padding-left: 10px;*/
            text-align: center;
          }
          .tableinput:focus{
            border:none;
          }
          .tableinput:active{
            border:none;
          }
        }

        .line3{
          height: 40px;
          width:100%;
          overflow: hidden;
          .line3-item{
            float: left;
            width:130px;
            text-align: center;
            border:0.5px solid #DDD;
            border-right: none;
            border-top: none;
            line-height: 40px;
            background: #F1F1F1;
            height: 40px;
            font-size: 14px;
          }
          .line3-item:last-of-type{
            border-right: 0.5px solid #DDD;
          }
          .line3-item:first-of-type{
            border-right: 0.5px solid #DDD;
            cursor: pointer;
            color: #24A7D3;
          }
          .line3-item:first-of-type:active{
            font-size: 16px;
          }
        }
      }
    }
    .hr{
      margin:40px 0;
      height:1px;border:none;border-top:1px solid #DDD;
    }
    .btn-ground{
      overflow: hidden;
      .okbtn{
        float: left;
        width: 150px;
        background: #F19031;
        color: white;
        line-height: 45px;
        height: 45px;
        text-align: center;
        cursor: pointer;
        border-radius: 5px;
        font-size: 20px;
        font-weight: bold;
      }
      .backbtn{
        float: left;
        color: #F19031;
        line-height: 45px;
        height: 45px;
        text-align: center;
        cursor: pointer;
        margin-left:40px;
        font-size: 16px;
      }
      .backbtn:active{
        font-size: 17px;
      }
    }

  }
  .form3{
    margin: 0 0 10px 0;background: white;padding: 10px 20px;
    .title{
      img{
        float: left
      }
      .p1{
        font-size: 18px; margin-left: 33px;font-weight: bolder;display: inline-block;
      }
    }
    .form3-content{
      text-align: center;
      padding: 10px 0 40px 0;
      p:nth-of-type(1){
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
     }
      P:nth-of-type(2){
        height: 30px;
        line-height: 30px;
        font-size: 14px;
      }
      P:nth-of-type(3){
        height: 30px;
        line-height: 30px;
        font-size: 14px;
      }
      .two-way{
        margin:20px 0;
        .two-way-tab{
          display: inline-block;border: 1px solid #4A3F91;padding: 10px 20px;
          border-radius:5px;
          cursor: pointer;
          img{
            float: left;
          }
          .two-way-tab-text{
            float: left;
            margin-left:20px;
            line-height: 50px;
            height: 50px;
            font-size: 16px;
          }
        }
        .two-way-tab:nth-of-type(2){
          margin-left: 40px;
        }
      }
      P:nth-of-type(4){
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #F19031;
        cursor: pointer;
      }
      P:nth-of-type(4):active{
        font-size: 16px;
      }
      P:nth-of-type(5){
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        span{
          cursor: pointer;
          color: #F19031;
        }
      }
    }
  }
  /*这是弹窗*/
  .showform{
    position: absolute;
    background: white;
    z-index: 11;
    top: 150px;
    left: 15.5%;
    border: 1px solid #ddd;
    width: 650px;
    padding:0 10px 20px 10px;
    .swiper-container{
      line-height: 40px;
      height: 40px;
      border-bottom: 1px solid #ddd;
      .swiper-slide{
        text-align: center;
        cursor: pointer;
        /*width: 62.8333px;*/
        /*min-width: 70px;*/
      }
      .swiper-slide-active1{
        border-bottom: 3px solid #4B3F91;
        color: #4B3F91;
        font-weight: 600;
      }
      .swiper-slide-active2{
        border-bottom: 3px solid #4B3F91;
        color: #4B3F91;
        font-weight: 600;
      }
    }
    .port{
      cursor: pointer;
      p{
        width: 33.33%;
        display: inline-block;
        text-align: center;
        padding: 20px 0 0 0;
        font-size: 0.875rem;
      }
    }
  }
  #searchBox1{
    left: -278px;
    top:40px;
    max-height: 227px;
    overflow-y: scroll;
  }
  #searchBox2{
    left: -278px;
    top:40px;
    max-height: 227px;
    overflow-y: scroll;
  }
</style>

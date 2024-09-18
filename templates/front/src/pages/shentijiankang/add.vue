<template>
<div :style='{"width":"100%","padding":"30px 7% 40px","margin":"0px auto","position":"relative","background":"none"}'>
    <el-form
	  :style='{"border":"0px solid #28890b30","width":"100%","padding":"30px","position":"relative","background":"none"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="用户账号" prop="yonghuzhanghao">
            <el-input  v-model="ruleForm.yonghuzhanghao" 
                placeholder="用户账号" clearable :readonly=" false  ||ro.yonghuzhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="用户姓名" prop="yonghuxingming">
            <el-input  v-model="ruleForm.yonghuxingming" 
                placeholder="用户姓名" clearable :readonly=" false  ||ro.yonghuxingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}'  label="性别" prop="xingbie">
            <el-select v-model="ruleForm.xingbie" placeholder="请选择性别"  >
              <el-option
                  v-for="(item,index) in xingbieOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="年龄" prop="nianling">
            <el-input  v-model.number="ruleForm.nianling" 
                placeholder="年龄" clearable :readonly=" false  ||ro.nianling"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="报告单" v-if="type!='cross' || (type=='cross' && !ro.baogaodan)" prop="baogaodan">
            <file-upload
            tip="点击上传报告单"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.baogaodan?ruleForm.baogaodan:''"
            @change="baogaodanUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' class="upload" v-else label="报告单" prop="baogaodan">
                <img v-if="ruleForm.baogaodan.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.baogaodan.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.baogaodan.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="身高(cm)" prop="shengao">
            <el-input type="number" v-model.number="ruleForm.shengao" 
                placeholder="身高(cm)" clearable :readonly=" false  ||ro.shengao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="体重(kg)" prop="tizhong">
            <el-input type="number" v-model.number="ruleForm.tizhong" 
                placeholder="体重(kg)" clearable :readonly=" false  ||ro.tizhong"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="视力" prop="shili">
            <el-input type="number" v-model.number="ruleForm.shili" 
                placeholder="视力" clearable :readonly=" false  ||ro.shili"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="耳力(分贝)" prop="erli">
            <el-input  v-model="ruleForm.erli" 
                placeholder="耳力(分贝)" clearable :readonly=" false  ||ro.erli"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="血糖(mmol/L)" prop="xuetang">
            <el-input type="number" v-model.number="ruleForm.xuetang" 
                placeholder="血糖(mmol/L)" clearable :readonly=" false  ||ro.xuetang"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="血压(mmHg)" prop="xueya">
            <el-input type="number" v-model.number="ruleForm.xueya" 
                placeholder="血压(mmHg)" clearable :readonly=" false  ||ro.xueya"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="血脂(mmol/L)" prop="xuezhi">
            <el-input type="number" v-model.number="ruleForm.xuezhi" 
                placeholder="血脂(mmol/L)" clearable :readonly=" false  ||ro.xuezhi"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}' label="登记日期" prop="dengjiriqi">
              <el-date-picker
				  :disabled=" false  ||ro.dengjiriqi"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.dengjiriqi" 
                  type="date"
                  placeholder="登记日期">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"none","display":"inline-block"}'  label="健康指标" prop="jiankangzhibiao">
            <el-select v-model="ruleForm.jiankangzhibiao" placeholder="请选择健康指标"  >
              <el-option
                  v-for="(item,index) in jiankangzhibiaoOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"6px","background":"#1e3c4f","width":"128px","lineHeight":"36px","fontSize":"14px","height":"36px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px solid #1e3c4f","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#1e3c4f","borderRadius":"6px","background":"none","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            yonghuzhanghao : false,
            yonghuxingming : false,
            xingbie : false,
            nianling : false,
            baogaodan : false,
            shengao : false,
            tizhong : false,
            shili : false,
            erli : false,
            xuetang : false,
            xueya : false,
            xuezhi : false,
            dengjiriqi : false,
            jiankangzhibiao : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          yonghuzhanghao: '',
          yonghuxingming: '',
          xingbie: '',
          nianling: '',
          baogaodan: '',
          shengao: '',
          tizhong: '',
          shili: '',
          erli: '',
          xuetang: '',
          xueya: '',
          xuezhi: '',
          dengjiriqi: '',
          jiankangzhibiao: '',
        },
        xingbieOptions: [],
        jiankangzhibiaoOptions: [],


        rules: {
          yonghuzhanghao: [
          ],
          yonghuxingming: [
          ],
          xingbie: [
          ],
          nianling: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          baogaodan: [
            { required: true, message: '报告单不能为空', trigger: 'blur' },
          ],
          shengao: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          tizhong: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          shili: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          erli: [
          ],
          xuetang: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          xueya: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          xuezhi: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          dengjiriqi: [
          ],
          jiankangzhibiao: [
            { required: true, message: '健康指标不能为空', trigger: 'blur' },
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.dengjiriqi = this.getCurDate()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='yonghuzhanghao'){
              this.ruleForm.yonghuzhanghao = obj[o];
              this.ro.yonghuzhanghao = true;
              continue;
            }
            if(o=='yonghuxingming'){
              this.ruleForm.yonghuxingming = obj[o];
              this.ro.yonghuxingming = true;
              continue;
            }
            if(o=='xingbie'){
              this.ruleForm.xingbie = obj[o];
              this.ro.xingbie = true;
              continue;
            }
            if(o=='nianling'){
              this.ruleForm.nianling = obj[o];
              this.ro.nianling = true;
              continue;
            }
            if(o=='baogaodan'){
              this.ruleForm.baogaodan = obj[o].split(",")[0];
              this.ro.baogaodan = true;
              continue;
            }
            if(o=='shengao'){
              this.ruleForm.shengao = obj[o];
              this.ro.shengao = true;
              continue;
            }
            if(o=='tizhong'){
              this.ruleForm.tizhong = obj[o];
              this.ro.tizhong = true;
              continue;
            }
            if(o=='shili'){
              this.ruleForm.shili = obj[o];
              this.ro.shili = true;
              continue;
            }
            if(o=='erli'){
              this.ruleForm.erli = obj[o];
              this.ro.erli = true;
              continue;
            }
            if(o=='xuetang'){
              this.ruleForm.xuetang = obj[o];
              this.ro.xuetang = true;
              continue;
            }
            if(o=='xueya'){
              this.ruleForm.xueya = obj[o];
              this.ro.xueya = true;
              continue;
            }
            if(o=='xuezhi'){
              this.ruleForm.xuezhi = obj[o];
              this.ro.xuezhi = true;
              continue;
            }
            if(o=='dengjiriqi'){
              this.ruleForm.dengjiriqi = obj[o];
              this.ro.dengjiriqi = true;
              continue;
            }
            if(o=='jiankangzhibiao'){
              this.ruleForm.jiankangzhibiao = obj[o];
              this.ro.jiankangzhibiao = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.yonghuzhanghao!=''&&json.yonghuzhanghao) || json.yonghuzhanghao==0){
                this.ruleForm.yonghuzhanghao = json.yonghuzhanghao
            }
            if((json.yonghuxingming!=''&&json.yonghuxingming) || json.yonghuxingming==0){
                this.ruleForm.yonghuxingming = json.yonghuxingming
            }
            if((json.xingbie!=''&&json.xingbie) || json.xingbie==0){
                this.ruleForm.xingbie = json.xingbie
            }
            if((json.nianling!=''&&json.nianling) || json.nianling==0){
                this.ruleForm.nianling = json.nianling
            }
          }
        });
        this.xingbieOptions = "男,女".split(',')
        this.jiankangzhibiaoOptions = "正常,偏低,偏高".split(',')
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`shentijiankang/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('shentijiankang/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post(`shentijiankang/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post(`shentijiankang/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
      baogaodanUploadChange(fileUrls) {
          this.ruleForm.baogaodan = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #ddd;
	  border-radius: 30px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  background: #fff;
	  width: auto;
	  border-width: 0px;
	  border-style: solid;
	  min-width: 500px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border-radius: 30px;
	  padding: 0 10px;
	  color: #666;
	  background: #fff;
	  width: auto;
	  font-size: 14px;
	  border-color: #28890b30;
	  border-width: 0px;
	  border-style: solid;
	  min-width: 500px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border-radius: 30px;
	  padding: 0 10px 0 30px;
	  color: #666;
	  background: #fff;
	  width: auto;
	  font-size: 14px;
	  border-color: #28890b30;
	  border-width: 0px;
	  border-style: solid;
	  min-width: 500px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  cursor: pointer;
	  color: #333;
	  font-weight: 600;
	  font-size: 24px;
	  border-color: #28890b30;
	  line-height: 54px;
	  border-radius: 30px;
	  background: #fff;
	  width: auto;
	  border-width: 0px;
	  border-style: solid;
	  text-align: center;
	  min-width: 200px;
	  height: 54px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  cursor: pointer;
	  color: #333;
	  font-weight: 600;
	  font-size: 24px;
	  border-color: #28890b30;
	  line-height: 54px;
	  border-radius: 30px;
	  background: #fff;
	  width: auto;
	  border-width: 0px;
	  border-style: solid;
	  text-align: center;
	  min-width: 200px;
	  height: 54px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  cursor: pointer;
	  color: #333;
	  font-weight: 600;
	  font-size: 24px;
	  border-color: #28890b30;
	  line-height: 54px;
	  border-radius: 30px;
	  background: #fff;
	  width: auto;
	  border-width: 0px;
	  border-style: solid;
	  text-align: center;
	  min-width: 200px;
	  height: 54px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 0px solid #eee;
	  border-radius: 0px;
	  padding: 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  background: #fff;
	  width: auto;
	  font-size: 14px;
	  min-width: 800px;
	  height: 120px;
	}
</style>

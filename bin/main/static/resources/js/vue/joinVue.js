"use strict"
var joinVue = joinVue || {}

joinVue = {
	joininfofo :()=>{
		return `<style>
.clearfix:after {display: block; clear: both; content: ''; visibility: hidden; }
</style>
<div id = "joininfo">
         <p style="text-align: center;">회원가입</p>
      </div>
      <div>
         <p style="float: right">*필수입력사항</p>
      </div>

      <div class="writer" style="height:1200px; width:900px; display:block; padding: 3%;
                           margin:3% auto;">
         <table class="board" style="
                              
                              background-color: #ffff;
                              height : 700px; width : 900px;
                              display:inline-block;">

         <tr style="width:609px; height:60px;">
            <td style="width: 149px; height:60px;">아이디*</td>
            <td style="width: 460px; height:60px;"><input type="text" value maxlength="16"
            label="id" style="width:300px; height:40px;" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합">
            <button type="button" style="width: 150px; height:40px;">중복확인</button>
         </td>
         </tr>

         <tr style="width:609px; height:60px;">
            <td style="width: 149px; height:60px;">비밀번호*</td>
            <td style="width: 460px; height:60px;"><input type="text" value maxlength="16"
            label="id" style="width:300px; height:40px;" placeholder="비밀번호를 입력해주세요">
         </td>
         </tr>

         <tr style="width:609px; height:60px;">
            <td style="width: 149px; height:60px;">비밀번호확인*</td>
            <td style="width: 460px; height:60px;"><input type="text" value maxlength="16"
            label="id" style="width:300px; height:40px;" placeholder="비밀번호를 한번 더 입력해주세요">
         </td>
         </tr>

         <tr style="width:609px; height:60px;">
            <td style="width: 149px; height:60px;">이름*</td>
            <td style="width: 460px; height:60px;"><input type="text" value maxlength="16"
            label="id" style="width:300px; height:40px;" placeholder="고객님의 이름을 입력해주세요">
         </td>
         </tr>

         <tr style="width:609px; height:60px;">
            <td style="width: 149px; height:60px;">이메일*</td>
            <td style="width: 460px; height:60px;"><input type="text" value maxlength="16"
            label="id" style="width:300px; height:40px;" placeholder="예 : marketkurly@kurly.com">
            <button type="button" style="width: 150px; height:40px;">이메일중복확인</button>
         </td>
         </tr>

         <tr style="width:609px; height:60px;">
            <td style="width: 149px; height:60px;">휴대폰*</td>
            <td style="width: 460px; height:60px;">
               <input type="text" value maxlength="16"
               label="id" style="width:300px; height:40px;" placeholder="숫자만 입력해주세요">
               <button type="button" style="width: 150px; height:40px;">인증번호받기</button>
               
               <input type="text" value maxlength="16"
               label="id" style="width:300px; height:40px;" placeholder="인증번호를 입력해주세요">
               <button type="button" style="width: 150px; height:40px;">인증번호확인</button>
         </td>
         </tr>

         <tr style="width:609px; height:87px;">
            <td style="width:149px; height:87px;">
               배송 주소
            </td>
            <td style="width:460px; height:87px;">
               <button type="button" style="width:150px; height:40px;">주소검색</button>
            </td>
         </tr>

         <tr style="width:609px; height:48px;">
            <td style="width:609px; height:48px;">
               성별
            </td>
            <td>
               <div class="groupRadio"
               style="width:460px; height:40px;">
                  <label style="width:57px; height: 18px;">
                     <input type="radio" style="width: 13px; height: 13px;">
                     <span style="width:36px; height:20px;">남자</span>
                  </label>

                  <label style="width:57px; height: 18px;">
                     <input type="radio" style="width: 13px; height: 13px;">
                     <span style="width:36px; height:20px;">여자</span>
                  </label>

                  <label style="width:57px; height: 18px;">
                     <input type="radio" style="width: 13px; height: 13px;">
                     <span style="width:36px; height:20px;">선택안함</span>
                  </label>
               </div>
            </td>
         </tr>

         <tr style="width:609px; height:86px;">
            <td style="width:149px; height:86px;">
               생년월일
            </td>
            <td>
               <div style="width:300px; height:40px;">
                  <input type="text" style="width:80px; height:37px; text-align: center;" placeholder="YYYY">
                  <span>
                     <span>/</span>
                  </span>

                  <input type="text" style="width:80px; height:37px; text-align: center;" placeholder="MM">
                  <span>
                     <span>/</span>
                  </span>

                  <input type="text" style="width:80px; height:37px; text-align: center;" placeholder="DD">

               </div>
            </td>
         </tr>
         </table>

         <div style="width:640px; padding: 29px 0 21px 29px;
                              
                              background-color: #ffff;
                              margin: 12%;">
         
         <div style="width: 609px; height:57px; display:inline-block;">
            <h3 style="width:130px; height:28px; float: left;
                     font-weight: 700; font-size: 20px; line-height: 28px;">이용약관동의*</h3>
            <p style="width:460px; height:27px; float: left; 
            padding-left: 10px; font-size: 12px; line-height: 17px;padding-top: 10px;">
            선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
         </div>

         <div class="clearfix" style="width:609px; height:42px; float: left;">
            <label for="">
               <input type="checkbox">
                  <span>전체동의</span>
            </label>
         </div>

         <div style="width:609px; height:42px; float: left;">
            <label for="">
               <input type="checkbox">
                  <span>이용약관(필수)</span>
            </label>
         </div>

         <div style="width:609px; height:42px; float: left;">
            <label for="">
               <input type="checkbox">
                  <span>개인정보처리방침(필수)</span>
            </label>
         </div>

                  <div style="width:609px; height:42px; float: left;">
            <label for="">
               <input type="checkbox">
                  <span>개인정보처리방침(선택)</span>
            </label>
         </div>

                  <div style="width:609px; height:42px; float: left;">
            <label for="">
               <input type="checkbox">
                  <span>무료배송,할인쿠폰 등 혜택 / 정보 수신(선택)</span>
            </label>

            <div style="width:583px; height:26px; padding-left: 26px;">
               <label for="">
                  <input type="checkbox">
                  <span>SMS</span>
               </label>
               <label for="">
                  <input type="checkbox">
                  <span>SMS</span>
               </label>
            </div>

            <div style="width:583px; height:30px;">
               <label for="">
                  <input type="checkbox">
                  <span>본인은 만 14세 이상입니다.(필수)</span>
               </label>
            <button type="submit"
               style="display: block;
               width:340px; height:54px;
               margin:45px auto 0;
               border: 0;
               border-radius: 3px;
               background-color: #5f0080;
               font-size: 16px;
               color:#fff;
               line-height: 44px;
               letter-spacing: -3.px;">
                  가입하기
               </button>
            </div>
            
         </div>

         </div>
      </div>
      </br>
      </br>
      </br>`
	}

}
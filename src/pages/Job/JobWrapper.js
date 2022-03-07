import styled from "styled-components";

const JobWrapper = styled.div`

  .cont {
    background: linear-gradient(rgba(22, 28, 36, 0.88), rgba(22, 28, 36, 0.88))
        center center / cover no-repeat,
      url(https://zone-assets-api.vercel.app/assets/bg_gradient.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .ul {
    list-style-type: disc;
  }
  .firstP {
    line-height: 2;
    font-size: 1rem;
  }
  .h1 {
    font-weight: 700;
  }
  .bgbutton {
    background: #fa541c;
  }
  .sideH1 {
    margin: 0px;
    font-weight: 600;
    line-height: 1.85714;
    font-size: 0.875rem;
  }
  .sideCard {
    background-color: rgb(255, 255, 255);
    color: rgb(33, 43, 54);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-image: none;
    overflow: hidden;
    box-shadow: rgb(145 158 171 / 16%) -16px 16px 56px -8px;
    border-radius: 16px;

    padding: 24px;
  }
  .sideP {
    margin: 0;
    line-height: 1.8571428571428572;
    font-size: 0.875rem;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    color: #637381;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .imgCard {
    line-height: 0;
    display: block;
    overflow: hidden;
    width: 48px;
    height: 48px;
    border-radius: 8px;
  }
  .sideH12 {
    margin: 0px;
    font-weight: 600;
    line-height: 1.85714;
  }
  .sideCardTwo {
    color: rgb(33, 43, 54);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border: 1px solid rgba(145, 158, 171, 0.24);
    background-image: none;
    padding: 30px;
    border-radius: 16px;
    background-color: rgb(255, 255, 255);
    margin-top: 56px;
  }
  .hg {
    margin: 0px 0px 8px;

    font-weight: 600;
    line-height: 1.5;
  }
  .item {
    border-bottom: 1px dashed #e5e8eb;
  }

  .sideCardTHree {
    color: rgb(33, 43, 54);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border: 1px solid rgba(145, 158, 171, 0.24);
    background-image: none;

    border-radius: 16px;
    background-color: rgb(255, 255, 255);
    margin-top: 56px;
  }
  .mutedbtn {
    background-color: rgba(145, 158, 171, 0.12);
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    line-height: 1.84615;
    font-size: 0.8125rem;
    border-radius: 8px;
    color: rgb(99, 115, 129);
    margin: 4px;
  }
  .mutedbtn:hover {
    background-color: #d8dcdf;
  }
  .sideCardFour {
    background-size: 100%;
    object-fit: cover !important;
    // background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 75%);
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    height: 400px;
    margin-top: 40px;
}

.firstelem {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    width: 100%;
    bottom: 0px;
    z-index: 40;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
}
.parentspan {
    width: 100%;
    line-height: 0;
    display: block;
    // overflow: hidden;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    height: 100%;
    padding-top: 100%;
    background-image: url("https://zone-assets-api.vercel.app/assets/images/career/career_3.jpg");
    background-size: cover;
  }
  .linear {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 30;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 75%);
    
  }

  
} 
.adP {
  margin: 8px 0px 24px;
    line-height: 1.85714;
    font-size: 0.875rem;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    color: rgb(255, 255, 255);
}
.ad {
  font-weight: 700;
    line-height: 2;
    font-size: 1.25rem;
    color: rgb(34, 184, 207);
}
}
.orangebtn {
  background-color: #FA541C;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 8px;
    // margin: 8px 0px 24px;
    padding: 8px 24px;
    line-height: 1.85714;
    font-size: 1rem;
    font-weight: 700;
    color: rgb(255, 255, 255);
}
.orangebtn:hover {
  background-color: #BF4435;
}
.viewAllBtn {
  background-color: transparent;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
  box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.84615;
  font-size: 0.8125rem;
  border-radius: 8px;
  color: #FA541C;
  margin: 4px;
}
.viewAllBtn:hover {
  background-color: #F9DAD0;
}
.cre {
  font-weight: 600;
    line-height: 1.7142857142857142;
    font-size: 0.875rem;
    text-transform: capitalize;
}
.mutedsection {
  background-color: #F9FAFB;
  }
  .itm {
    background-color: rgb(255, 255, 255);
    color: rgb(33, 43, 54);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-image: none;
    overflow: hidden;
    border-radius: 16px;
    position: relative;
    z-index: 0;
    box-shadow: rgb(145 158 171 / 10%) -8px 8px 24px -4px;
  }
  .dashedtop {
    border-top: 1px dashed #808D99;
  }
  .jobForYou {
    background: linear-gradient(to bottom, rgba(22, 28, 36, 0.88), rgba(22, 28, 36, 0.88)),url(https://zone-assets-api.vercel.app/assets/images/career/career_newsletter.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .map {
    height: 600px;
  }

`;

export default JobWrapper;

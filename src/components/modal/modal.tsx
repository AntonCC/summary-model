import React from 'react'
import styled from 'styled-components'
import Hero from '../../images/illustration-hero.svg'

const StyledModal = styled.div`
  /* height: 697px; */
  width: 450px;
  background: #fff;
  border-radius: 20px;
  z-index: 5;
  .top {
    height: 220px;
    background: url(${Hero});
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  .bottom {
    height: 477px;
      display: flex;
      justify-content: center;
      align-items: center;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        font-size: 2.8rem;
        margin-bottom: 1.8rem;
      }
      .description {
        max-width: 354px;
        text-align: center;
        font-size: 1.6rem;
        line-height: 2.6rem;
        color: #717FA6;
        margin-bottom: 2rem;
      }
      .plan {
        height: 98px;
        width: 354px;
        background: #E0E7FF;
        border-radius: 10px;
        margin-bottom: 3.2rem;
      }
      .cta-buttons {
        display: flex;
        flex-direction: column;
      }
    }
  }
`

const Modal = () => {
  return (
    <StyledModal>
      <div className="top">

      </div>
      <div className="bottom">
        <div className="content">
          <h3 className="title">Order Summary</h3>
          <p className="description">
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>
          <div className="plan">

          </div>
          <div className="cta-buttons">
            <button>Proceed to Payment</button>
            <button>Cancel Order</button>
          </div>
        </div>
      </div>
    </StyledModal>
  )
}

export default Modal;
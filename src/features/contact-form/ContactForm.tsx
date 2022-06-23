import styled from 'styled-components';
import {Title} from '../../components/title/Title';

export const ContactForm = () => {
    return (
        <section>
            <Container>
                <Title title="Get in touch with me"/>
                <Form>
                    <Input type="text" placeholder="full name"/>
                    <Input type="text" placeholder="email"/>
                    <Textarea name="textarea" id="" rows={5}/>
                    <Button>Submit</Button>
                </Form>
            </Container>
        </section>
    )
};

const Container = styled.div`
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form.attrs({})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  min-height: 380px;
  margin: 0 auto;
  padding: 15px;

  @media (max-width: 991.98px) {
    width: 80%;
  }

  @media (max-width: 767.98px) {
    width: 100%;
  }

  @media (max-width: 479.98px) {
  }
`;

const Input = styled.input`
  width: 100%;
  font-family: inherit;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.2rem;
  color: inherit;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  margin-bottom: 1rem;

  & placeholder {
    color: inherit;
  }

  &:focus {
    border-bottom: 2px solid #3DD1E7;
  }
`;

const Textarea = styled.textarea.attrs({
    resize: 'none',
    placeholder: 'text...',
})`
  width: 100%;
  outline: none;
  padding: 7px;
  font-size: 1.2rem;
  background: transparent;
  overflow: auto;
  color: inherit;
  border: 2px solid #9b9b9b;
  transition: border-color 0.2s;
  margin-bottom: 2rem;

  & placeholder {
    color: inherit;
  }

  &:focus {
    border: 2px solid #3DD1E7;
  }
`;

const Button = styled.button.attrs({})`
  background-color: #3DD1E7;
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: .75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 100%;
  max-width: 200px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:focus {
    outline: 0;
  }

  &:after {
    content: '';
    position: absolute;
    border: 1px solid #000000;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  :hover:after {
    bottom: 2px;
    left: 2px;
  }

  @media (min-width: 768px) {
    padding: .75rem 3rem;
    font-size: 1.25rem;
  }
`;


//
// $primary: #11998e;
// $secondary: #38ef7d;
// $white: #fff;
// $gray: #9b9b9b;
// .form__group {
//     position: relative;
//     padding: 15px 0 0;
//     margin-top: 10px;
//     width: 50%;
// }
//
// .form__field {
//     font-family: inherit;
//     width: 100%;
//     border: 0;
//     border-bottom: 2px solid $gray;
//     outline: 0;
//     font-size: 1.3rem;
//     color: $white;
//     padding: 7px 0;
//     background: transparent;
//     transition: border-color 0.2s;
//
// &::placeholder {
//         color: transparent;
//     }
//
// &:placeholder-shown ~ .form__label {
//         font-size: 1.3rem;
//         cursor: text;
//         top: 20px;
//     }
// }
//
// .form__label {
//     position: absolute;
//     top: 0;
//     display: block;
//     transition: 0.2s;
//     font-size: 1rem;
//     color: $gray;
// }
//
// .form__field:focus {
//     ~ .form__label {
//         position: absolute;
//         top: 0;
//         display: block;
//         transition: 0.2s;
//         font-size: 1rem;
//         color: $primary;
//         font-weight:700;
//     }
//     padding-bottom: 6px;
//     font-weight: 700;
//     border-width: 3px;
//     border-image: linear-gradient(to right, $primary,$secondary);
//     border-image-slice: 1;
// }
// /* reset input */
// .form__field{
// &:required,&:invalid { box-shadow:none; }
// }
// /* demo */
// body {
//     font-family: 'Poppins', sans-serif;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     min-height: 100vh;
//     font-size: 1.5rem;
//     background-color:#222222;
// }

// <div className="form__group field">
//     <input type="input" className="form__field" placeholder="Name" name="name" id='name' required/>
//     <label htmlFor="name" className="form__label">Name</label>
// </div>
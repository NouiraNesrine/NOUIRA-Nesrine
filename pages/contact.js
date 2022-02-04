import { Container, Heading, Textarea, Button, FormControl, Input, FormLabel, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/articale'
import emailjs from 'emailjs-com'
import Kizuna from '../components/layouts/kizuna'
import NoSsr from '../components/no-ssr'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {

  const SnackbarType = {
    success: "success",
    fail: "fail",
  }
  const snackbarRef = useRef(null)
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_d167k6h', 'template_0ezd3al', e.target, 'user_uLA4s4kGfuvP6C4ja320N')
      .then(res => {
        console.log(res)
        toast.success("Your message was sent successfully")
      }).catch(err => {
        console.log(err)
        toast.error("Oups something went wrong")
      })
    e.target.reset()

  }

  return (
    <Layout title="Resume">
      <Container pt={50}>
        <NoSsr>
          <Kizuna />
        </NoSsr>

        <Heading as="h3" variant="section-title" mt={-50}>
          Please don't leave before you say something !
        </Heading>
        <Box my={8} textAlign='left'>
          <form onSubmit={sendEmail}>
            <FormControl mt={4}>
              <FormLabel>Name</FormLabel>
              <Input name='name' id='name' placeholder='Enter your name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email address</FormLabel>
              <Input name='email' id='email' placeholder='Enter your email address' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea name='message' id='message' placeholder='Say something' />
            </FormControl>

            <Button type='submit' value='send' width='full' mt={4}>♥ Send ♥</Button>
          </form>

        </Box>
        <ToastContainer />
      </Container>

    </Layout>)
}

export default Contact
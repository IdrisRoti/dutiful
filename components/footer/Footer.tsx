import FooterLinks from './FooterLinks'
import SocialLinks from './SocialLinks'
import Copyright from './Copyright'

const Footer = () => {
  return (
    <footer className='bg-primary pt-14 pb-8'>
        <div className="max-w-[75rem] mx-auto px-4 lg:px-0">
            <FooterLinks />
            <div className='my-6 h-[1px] w-full bg-[#63428E]' />
            <SocialLinks />
            <div className='mt-6 mb-4 h-[1px] w-full bg-[#63428E]' />
            <Copyright />
        </div>
        
    </footer>
  )
}

export default Footer
import CustomButtom from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
      placeholder='Ask AI...'
      rows={5}
      className='aipicker-textarea'
      />
      
    </div>
  )
}

export default AIPicker

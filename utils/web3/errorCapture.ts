const errorMapper = ({ message }: { message: string }) => {
  if (message.includes('ERC20: insufficient allowance')) {
    return 'You do not have sufficient APE tokens. Please check your balance'
  }

  return message
}

const errorCapture = ({ message, toast }: { message: string; toast: any }) => {
  return toast.error(errorMapper({ message }))
}

export default errorCapture

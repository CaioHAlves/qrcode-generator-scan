import React from 'react'
import QrScan from 'react-qr-reader'
import { FooterComponent, Header, OptionsQrCode } from '../../components'
import { Container, Content } from '../../components/globalStyledComponets'
import { useHooks } from '../../hooks/useHooks'
import { TextArea } from './styles'

export function ScannerPage() {

  const { display } = useHooks()

  const [qrcodeState, setQrcodeState] = React.useState<string>('')

  const dataQrcode = (qrcode: any) => {
    if (qrcode) {
      console.log(qrcode)
      setQrcodeState(qrcode)
    }
  }

  const errorScan = () => {
    
  }

  return (
    <Container>
      <Header/>
      <OptionsQrCode/>
      <Content>
        <QrScan
          delay={300}
          onError={dataQrcode}
          onScan={errorScan}
          style={{ width: 240, height: 240 }}
        />
        <TextArea
          defaultValue={qrcodeState}
        />
      </Content>
      <FooterComponent
        height={display ? '150px' : '100'}
        iconSize={display ? 'large' : 'medium'}
        padding={display ? '' : '16px 0px'}
      />
    </Container>
  )
}
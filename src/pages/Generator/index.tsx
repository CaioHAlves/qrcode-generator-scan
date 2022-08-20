import React from 'react'
import axios from 'axios'
import { Header } from '../../components'
import { FooterComponent } from '../../components/Footer'
import { Container, Content } from '../../components/globalStyledComponets'
import { useHooks } from '../../hooks/useHooks'
import { setData } from '../../redux/modules/myData'
import { StyledIconDownload, StyledTextField, StyledTypography, ButtonDownload } from './styles'
import QRcode from 'qrcode.react'

export function GeneratorPage() {

  const { dispatch, display } = useHooks()
  const [qr, setQr] = React.useState('')

  React.useEffect(() => {
    axios.get("https://api.github.com/users/CaioHAlves")
    .then((response) => {
      const { data } = response
      dispatch(setData({
        name: data.name,
        avatar_url: data.avatar_url,
        company: data.company
      }))
    })
    .catch((error) => {
      console.log(error)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setQr(event.target.value);
  }

  const downloadQR = () => {
    
    const canvas: any = document.getElementById("qrcode");
    
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    
    let downloadLink = document.createElement("a");
    
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return (
    <Container>
      <Header/>
      <Content>
        <StyledTextField
          onChange={handleChange}
          value={qr} 
          label="Conteudo QR" 
          size="medium" 
          variant="outlined"
        />
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {qr ?
            <>
              <QRcode
                id="qrcode"
                value={qr}
                size={320}
                includeMargin={true}
              />
              <ButtonDownload
                width="220px"
                startIcon={<StyledIconDownload/>}
                onClick={downloadQR}
              >
                Download QR Code
              </ButtonDownload>
            </>
            :
            <StyledTypography>Digite algo no campo acima para gerar QR code</StyledTypography>
          }
        </div>
      </Content>
      <FooterComponent
        height={display ? '150px' : '100'}
        iconSize={display ? 'large' : 'medium'}
        padding={display ? '' : '16px 0px'}
      />
    </Container>
  )
}
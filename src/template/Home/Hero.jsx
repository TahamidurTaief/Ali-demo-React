import React from 'react';
import HeroCard from './HeroCard';

function Hero() {
    return ( 
        <div className="hero-section">
        <div className="left-half">
          <div className="content-wrapper">
            <div className="hero-heading">Media Intelligence</div>
            <div className="hero-description">
              Votre partenaire stratégique en recherche et intelligence d'affaires. Spécialisés dans la recherche média, commerciale et digitale, nous mettons à votre disposition notre expertise pour vous fournir des informations précises et pertinentes.
            </div>

            
            <div className="d-flex align-items-center hero-button-stats">
            <button className="hero-button">
                En savoir plus &nbsp;&nbsp;
                <i class="fa-solid fa-arrow-right"></i>
              </button>
              <div className="hero-stats d-flex align-items-center">
                <div className="stat-item">
                  <img src="data:image/jpeg;base64,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" alt="Person 1" className="stat-image"/>
                  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUWFRcYFRgVFxUWFhUXFRUYHSggGBolGxUXITIhJSkrLi4uHSAzODMtNygtLisBCgoKDg0OGxAQGi0dIB8vLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tMC0tLv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQQFAgMGBwj/xABGEAABAwEFBAcEBggDCQAAAAABAAIRAwQSITFBBQZRYRMiMnGBkbEHcqHBFEJSYoLwIzM0kqKy0eFDc8IVFlNjg7PS4vH/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAlEQEBAAICAwABBAMBAAAAAAAAAQIRAyESMUFRBCIyYYGR8EL/2gAMAwEAAhEDEQA/APV0imhAYpJpKiCUJoSNjCcJoSBJwhNIyQsoRCRkhZQiEAgEwhNACEIQAlCaEBiQlCyQgMELIhJAYwiFkkgMYThNCCYwmmhPQ2zQhCZMUJlIpgkIQkAhCaAEwkFkEjCcIXL7Z34s9neWFrnkYdUsieGLgkbqIQvNrV7TnBwuWchpmL8gGNCR2TzOCij2vEEh1knhFQg+MthMPU0Lidhe0uzV3inVY6zvd2S4h1Mk6Xxke8eK7VrgciD3FIGhKU0AIQhACSaEAkIQgEQksisUAkFCEyCEITJmhCEAikmUkwSaEJAIQskAkOcACSQABJJwAAzJKYC4H2g70BrXUKZ1DKjhq8kdQcYGJ8OaSkbe/fhx/RWe+0HAOaD0jscSPsN+J5RjxtSjaHC9dF6JgG64DXGHSe9R3V3saariM+r9Yzi2BOAzMnGfiqxm2Kji5tQQJEOIMtOkzphOkRI4Fha1rUWtvkYti8HOxuuwBcNZIPWiNMFX7cqNbdeILHtEDOIMGP7KBabQ9wuuPWEg8CNY0B7sCtDLU40+ifBAcS0O0mIDTpkfglsaSatKmW9V2hgjURJBGjgfgTyVlu3vpaLK4APlo0dlmMjp8Vy5ruaTHGeBBHA6FN3W6ze8j1w70jfRu7m9lG1gR1H4Sxx7hLTqJK6aF8wWTa1VhYWucC37OYIJyPngvoDcfbf0uzNc5wdUZ1akciQHEZiRBQVX6E4QgEhCEAkQmhAYlYrMrEoBJJlJMBCEJkzQhCCBWKyWKcAQhNAMIQhIIe2baKNB9TgIHvHAeq8R2lXBqAYuxcAdZJN4gfaML1HfarJo09OvU5S0BjZ8XrzOwWd1W0U6Tcbz7oj7AguPdkPEpW6i8Zu6X2xtgdLD3CcABwy0Vk7dRhypt8obryxzXdWGwMY0NiANE7WwBY++3RuTqPKtobnAHAAcxkqG0bpYnA65L2GvSBBVdVs7Toi7VMZfjylu6TnGSR5YrbU3TDW4Ez36816Q6yNGigWhgU21Uwx/Dx3a1jfS6pMY+B71t2Lt6tZajKtEw5mg+sJktOGRg+a7bevZLalFzh2m44ei85oMg45+hmVrhdxzcmPjen1hZLQ2oxtRpBa9ocCMiCJwW0rh/Y5ai/ZwBJ/R1ajO4G68Acuuu4KpmSEIQAhCEAklkkUBgksikgEhCEBmhCFSQlCaRTgJMJJhKg0IQEHHMb8U2xSP1hf1xu9W98SFR7ibOaazq2rWho5S0Xh+8XeQXRb5loZTvZlzmjvLZ/0x5KHuZDWuaOMk8yAVOfppx+3WOxyUe0zCk02qv2htSgyQ+qwHgXCVm0+oVUHVROjcZOi3G2MqYscCOSA8CZPPwUtYgVGEKpqtJPJb7XvBZ2vuPqAHnPqsW2qlU7FQO7ile1b0iPpyCDqvLNsWa5We2IDXEz93D5eq9YfThee7yU/0r8McfhiPzyVcftnzTc29G9hlQfRK7cnC0XiPumlTa0/wO8l6OV5B7D6p+kWpk4GmwngXNcQDygPIXrxWzlCEISAQhCAEk0kAisSskimGKE0I0W2SEITIIKEIBICEApg0IQgbcR7Qqxc+kwT1QXE8z2f5VZboUAKJeMnOcR3THrKg75Wd5qlwHVFEEjjFRo84cVdbvtu2WkPuY9/csLlt1TDxk/uIG3rXWqNc2nU6JgkOfkTxg6Ly62NsodhWqVng9pknUT1hgYJE8JC9N2vsU2ohtWW0G4uYJ/SHQHW76rndo7OptcejkxAETEYGJnkO9T19aSX/AMo+7lrZea1pIJyDs+6FZbxWmpRBdGEfBbd2N3+teLAJdenGZ1InKVO34s4c0t4iFOumnlPLTy8VadXrva55xJDcwAJJJ7gpNKhY7wbSqvpVGkgtf9oZtnInLAGVb7LsYYZ6JpN0tkE9k6QTHwRa9kU3yOhMHDreeGJTmtJy3cum3ZtqqT0dTHAlrvlK5/faiWubUGREHwIKu7HYajIB6wGRMzHPDFR98qc2eTjdc0+eB9UY3suTH9tRvZXtJtltNSpUwYW9GThm5zSM8+yfNe6Svn+hYT0LDGJeD34Fe92UEMYDncbPfdErXDLytYcvFMMZfy2oSQtNMTQkhLRGkhCDJIppFAJCEILTJCEJkEIQgEUJrFMBZLFOUyUm9gPQODRJcGs8C7FPdq0B1npu5RnORjPwVrVpSQeGnEcFCstnZTbcY0NaCYAEDEzl4rnynbqwu8YsKjA9qrqllpj6o/upXSkKg21bnSKdPFzuGnNK1eGNt06CyVAeyuf3qF6TwWbrXVszGMp0i+XS914AganLE+S5XefbhY1xknHDmToErelY497ZbKqC8WuwPPXuVs6zNzXHbNt1WsQH07kYgyTnwMBdJZLYS2HZjAj5qZWtn0Wp8TAVRtuzuq0rrc8DwyOIU201ZJWhtQ+qcZ5eldsmy9YUb14CrSa0+8B6SvaSvONztll9oY+OpRF78WN2ec4+C9GWnFOtsv1OW7J+AhCS1cxpIQgwhCEAIKEihJIQhAZIQhACEIQAkgpJgIQhNJkKA9jmmXOmThhGAjAqctVppXmka5jvUZY7aYZaqBXqwMFVWAgA1XYucTjynD4KaXTmqW27PFZ1285sRi0xHgsHXPWl86peyyiVydo2YXVXuczqkRjyyI8yrW2bIpEC/WtGAyD4b/CB6rl7ZYKPWaKloLcy2YGAynP4oyyPDCflruhknh/VTrw6pBxMeIJA/uqChsqzz1BUJPGo+PIFXmzbHTpQ0YkYyTOPDFTvata+laMCRzWqkATDjAJgkZgEgSi1vlxPetU4AcY9U4nJ6fsTZbLNTuNJdJlzjEk5aZDkp6El0yacVtt3QhCE9DYQhCQ2EIQgbCRRKRQRIQhAZoQhACEIRASSEKiCEIQQQhOEBRbRZdeSMjj4nFRbNRJxVvtOnPiIVO6oWGFzZTVdeN3ikPsznDQLnLfs8iRIzJOauztK7h/9VZa7a2S5yeoqWq51nujTgoNoddjGTqtG0dshxhuDR+YVXUtrnmcVFmly7WD7RHit9hoF5AOpk9wVXZg57hAkkw0cT8hmZ4BdQ1rKNMknACXH7vH8UZcAtv0/Hc8t/Ix/Uckwx19rTurvVUs+0H2Gu4mhWdNAuMmk54Dg0E/ULrwjQxGq9RXy/tbaBr131jIvHq8mjBq9k9m++7bUxtntDotDRDSf8ZoGBH3wBiNc+MdGeP4csvTvESkUKDCEIQYKEJIBpIlJKgITSSDNCSJT0DSSQmQSTSQQTQFB2htqz0P1tVoP2c3fujFGgnhQ9p7Vo2dt6tUawaA9o+60YnwXGbb34qOltmbcb/xHYuPutyb4yub2Xsx9rrtFRznXjL3Ey64MXYnLCR4hb48FveXTPLlk6j0P/eCnVNFrWkCteLS7AwGktMThIg8Yc3nG+00AVwu+Vu6GtZ6zcGsrtgDLo2EA4cCL0ciOC7+q4RIyIkLk55Jl06+C3xcvtelCoa9InMldTtFs6KjtDFk2c7WswnBRxTJcGNF5zjg0a950GsnALoTYnOwaPz8lvs9kZRm7jUIF9+oGjW/nnkMb4+HLkv8ASeTlx45/bXYrGKQjAvODjpxLR90YSdcBhJC5rfrbGH0ZnJ9Q6mR1QeA1jhHIC22/tdtCnoXOwa3iRp7gOZ18V53WcXOLnElziS4nMk5kr0ZjMMfGPP3c8vLJqDVtovcwhzSQ5rg5pGYc0y0jmCAUmNW0iBPJExVt6vuh7UGvAp27qO0rtb1D/mNHZPMYdy9Is9dtRoexzXtcJDmkFpHIjAr5toUAQARkPz3q42NbrTY3X7LWLZMupOxpv95uU8xB5rPPh/BzN76kuT3T37o2silVHQWjLo3HqvP/AC3HM/dOPCc11sLCyz2skISQDSQhKgIQhIzQkhUk0kIQAou09o07PTNWq6GjzJ0DRqVJe8NBc4wACSeAGa8v2ztJ1srF5/VsJFJukZFx5laceHlU5Zabdob12usTdPQsOAY0C9HN+c9yp2URiTicyTiSe/VSujAWoiSBpK7McJj6c+WVrQ6mTkur3Qotp0ary79I6GNEdlhd1nTln6DiqJw9VabvV2MfdqYNuux4TE94Ba134Snn3Cx6V2/bQ6i8jJjZHIDAfPwAXV7p27prOwHNrQPDRV9rs9Oo0Nwcx5BMEFpZdECeGIhat2qRs1U0cYHZ5sOLZnUZeC8/9RhdeTu4M5/FdW2iqp1Km0h1ao2mwuDQ505zHVAxdn3DVW+27QKVN1QiboyykkgDHvK4Qur2qoA4jH7LW9VrZwvDE6w0HxS/T8Hn3fSufn8Op7dLta2tYLlIQNJzOl93EnQcwBnIorbahRpue85eYnQHV5+Hdnv+jgYB09H1CYyujAj8LgAOM5rk96rX0lToh2aWBAM9fWTqRqeM8MfQxwkmo4N3Kqa22l1Z5qP1wAGTWjJoUV9NSRTkre+jIVeK/KRApU5Wyszsji4fDE/ALCnaWjqtl54NHLVxwUunQcTfeAImGgk5iJJSmrOha32cKc0TosLFZ8JhTrkJotRKtka8Y4xrqDyK67dffOvZ4pWkmvSyD/8AGYOc/rB43u/Jc05p/OSxa1RlxTJU5NPbdm7Ro2hl+jUa9uRjMHg5pxaeRCkkLxGx2t1F4q0nljwIvNMSPsuGT28iu92Bv9RqltK0XabzADwf0TncDONMnnI56Llz4bi2xzldghMhJYrCEIQYQhCaQhBTCA5Xf7adykKDT1qmfuzA8z6FcjTYGgNGmC3bftnTWwu0aTHc3qt+ZWoru4sfHFz53dY1VroNxTqlZ2fIlas/rOJKpN4dqGg6mW/aJPMXSyPG8VegLl7VT6e30qYxDXAke7j8TASU7rdLZlVlnosN510GZxi9EjmAZGfyV9tCwltyoGyWEAgAzcJxhpxwwOE6q/2TZbtG7yjxyJ8yVytvfWYypQqVCWF3VntCi0daXZmefELLKTk3ieOVwsyLb+0aDqNSkHX3lvZaJA1ku7OTTETiqay0CxvBzhLo+q3B10cyS3wW6z2FzzDRdmJPMxA7mtAK6Oy7Ka0X3dluJJ+yzTz+CrHDHinjCyzvJfKuO20Po1GQYfULg3jeze8cLt6AebVwvRLpN5bca9Un6rRdYODZnLiTJ8hoqo0sJhayflG1exilUqcjDJOmAXXVtpUHNJaIu5gayeEJnUWpZxTl4i7m8cOLhz48VNp2W/1smDL7x/osbPZundj+qYcT9t44fdHrjwKkWm0S663ADAfBTLs0hjMYAyWb6ei3WelDZOZWu0OhNNR6zQAo1VwaLzjE5CcY+S2PqAC+78I+ZVBbrS55xT9HjN1stW0Tk3AcvmcyoDrY45mdMccFiaJK11oaOaxzt02xker+zLfW+WWK0Ek5UKhMzAwpuPHgfDgvS18vWQOEPDi0ggggwQQcCDoQV9H7s7T+k2WjXOb2C977Za/+JpXJnjrttFkhCFmAhCEAFRdq1+jo1HjNrHEd8YKUVX7wtmzVv8tx8hKePsX08psb5qVNYDQPiVYNKr9mjtni/wBAAp8r0nI01MVIpCBC0t9SpI0QTF7v6qs3DoCpbH1iJgujwx9S3yUvaFS6xx4NW32U0L78OMn94u/8Aj5sV6/TF1g5D0H5PguVDGVaz74nKO1AunrTd5nLXwXQ7VtF1pHAfIn0afNQ9lWQMbeOYie/F7lzYdS1eXuQbOsGTiIEOIGRkkgT+G6PEqm9oG0xSpCg09ap2uTBp4n0K6u0VhSpuqOMBjZPhj6wvGdt7RdXrOqO1y5NyA8lXHLnd34MuppX5n4rK0Mw7ltoU9T+ZWD2yYXSzaPol4YEhwIgjPNZPomo7oWHEj9I77Lc4HBx+fMKVUddhrQC90xOggS4xoJHfgNVnWc2zUjj1nTJOZJzJPFTe1RB2ta20milTwAEQFr2HZi43yqIPNWqu12ZZ7rQ3lJ7kSnZputBgSqjtFzndlvkXcP6rbta0lzxSYcSYHzKwtwaGhjcm4f1J4lOIqo2ja7xOqi0bPPWdg0YqS8NGJVfbbQX4ZBPLpWPfpqt+0NGCAqwBznYrZUeBgBJUqx0SAXuXNd55dt5rGG4XQAM17X7IqhOzw0/UrVW+Buv/wBZXhdW0YyvcPY4D/s+99qvVI5wGN9WkeCx5bKuR3CEIWJhCEIAKp97rRcslQjNwDP3iAfhKuCuY9oU/RQBrUb6Ej4wq45vKFl6cLQENHMz8Vvc5aWnJbeC9FyMm5hbxotDM1uacEGqt4nxRPM/Jdz7JtmCnZRVOb8fA4D89y863tf1A3Un1Xs+79DorLRZH1QT3BuHoFny39ujxbLQ2+eTnfAH/wBD5qYG9hvEz59b+VseKwZT7I1geboB9JW2tXawPqkwGNJnh+Q0eawt+RUjkvaNtcNaLO04uhzvdBJjxIB7gvOWiTPj8VP2ztA2is6o7U4Dg0CGjyAUZlOPIrqwx8Zpnbu7Z5D4fFan1AwXjiSYAGZJwAHOYCdSoBicO/hmrHYu79as4VXtNNv+GHiCAfrXMw4jjEDmSnaNNNioXGmpUgvOLuAAya3kJOOpk6rkt4Nol7iF2O+WzK1nplwBfTAxcBi33hoOa80q1Lz1OV1Ol4zd2vN2rNJvH84rq7XXFGkXanLu0VPu3Z8AIz9NVX72bQNWq2iw5uDBykxKd/bC/lksNgyQ+0OzfLafug9Y+JHwWy0tPCP7q0oUG06bWjJrQGjkBCrtovOarFGSktZiceSprXXzhTLfVWOz9nXuu/BrcSSoz3bqNcdYzdYbOsGF9/DVRdoW68brMgtm09oGoblMQwYd/NR6FkIxhZZXrxwXjPuRUKM56r6E9mtC5syzD7rye81Xk+q8Da4Dn8+QX0hu3s36NZaNA5sYA73z1n/xErnzmmsWUISTWYNCEIAXOb+/sv8A1KfqhCvj/lCy9OCbotmqEL0HIzdn+eS2js/nmhCA5zeftM95vqF7s3JvuO9EIWXL8Xj6SKfaHeP5VUbyfsdo/D/LSQhYT3D+PIqOZ8FKGQQhd1Yz/v8Aadu1+10e/wD0FehN7Tu8oQsb7Xl6aNpfq3+67+Ur5xb+sPvH1QhK/F8f13u73Z/AuRb+20/fPoUIV8nqf4LD672v2fJVG08j4/JNCuMq5S0Zq22n+xnwSQp/La/FHs7RSbVr4poUYfwXfbRsz9fR/wA+j/3Wr6gdmUIXHm1jBCEKA//Z" alt="Person 1" className="stat-image" style={{marginLeft:"-30px"}}/>
                  <img src="data:image/jpeg;base64,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" alt="Person 1" className="stat-image"  style={{marginLeft:"-30px"}}/>
                  <div className="stat-text">
                    <div className="stat-bold">100+</div>
                    <div className="stat-subtext">Clients Entreprises</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="right-half">
          <img src="public/static/img/i-need-you-all-see-this-presentation-shot-team-businesspeople-gathered-around-laptop-office 1.png" alt="Right Side" />
        </div>
      </div>





    );
}

export default Hero;
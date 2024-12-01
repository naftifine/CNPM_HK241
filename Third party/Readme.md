- This folder is use for deploying the BK Pay service (sever.js)
- The Client_ex folder: A ReatJS test app for contacting with BK Pay
    + Send request to BK Pay and Get the QR code corresponding to student ID
- How to run: run ReactJS app and SeverJS app independently.

- Security:
    - RSA algorithm
    - SHA256

--------------------------------------------------------------------
INTERGRATION:
    Input parameter:
        - userId: The unique identifier for the user.

        - amount: The amount for the QR code request.
    Return value:
        - Type: String, 
        - Format: Format: data:image/jpeg;base64,<base64-encoded-image-data>

    Example: See App.js in Client_ex\qr-client\src

    Deploying:
        - In server.js:
            + line 69: change the http://localhost:3001/hcmutSPSS/pay to the address of the HCMUT_SPSS app
            + Remember to change the address of this app in API call of HCMUT_SPSS

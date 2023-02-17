#!/usr/bin/env bash
openssl s_client -connect fldcf-usw-app001-svc-rtr001.nwncloud.com:443 -servername fldcf-usw-app001-svc-rtr001.nwncloud.com | tee logcertfile
openssl x509 -in logcertfile -noout -text | grep -i "issuer"
curl --output intermediate.crt http://cacerts.digicert.com/DigiCertTLSRSASHA2562020CA1-1.crt
openssl x509 -inform DER -in intermediate.crt -out intermediate.pem -text
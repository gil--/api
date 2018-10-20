## Functions
**/addDonation** expects the following RAW body w/ JSON:
```json
{
	"amount": "3.80",
	"currency": "USD",
	"merchant_name": "Starbucks",
	"fundId": "123abc"
}
```

## Deployment

### Upload to Firebase
`firebase deploy --only functions`

### Deploy Locally for Testing
`firebase serve`



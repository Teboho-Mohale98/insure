# InsureCompare SA

A free insurance comparison tool for South Africans to compare estimated quotes from multiple insurers.

## ⚠️ Important Disclaimer

This is an **estimation tool only**. It does not provide real, bindable insurance quotes. All calculations are estimates based on:
- Publicly available information
- Typical market rates
- General industry knowledge

**Always get official quotes directly from insurers** before making any insurance decisions.

## Features

- **Car Insurance Comparison**: Compare quotes from 8+ South African insurers
- **Life Insurance Comparison**: Get estimates from 6 major life insurance providers
- **Medical Aid Comparison**: Compare 6 medical aid schemes using 2025 CMS-published rates
- **API Backend**: RESTful API for quote calculations
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Accessibility**: WCAG-compliant with keyboard navigation
- **Privacy-Focused**: No tracking, data stays in browser

## Tech Stack

### Frontend
- HTML5
- CSS3 (Custom properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- No frameworks or build tools required

### Backend
- Node.js
- Express.js
- CORS enabled
- Rate limiting
- Helmet security

## Setup & Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation Steps

1. **Clone or download this repository**
   ```bash
   cd C:\Users\tebohom\Documents\insure
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to: `http://localhost:3000`

## Project Structure

```
insure/
├── index.html              # Main HTML file
├── styles.css              # All styles
├── script.js               # Frontend JavaScript
├── api-client.js           # API client wrapper
├── server.js               # Express server
├── package.json            # Dependencies
│
├── api/
│   ├── data/               # Insurance provider data
│   │   ├── car-insurance.js
│   │   ├── life-insurance.js
│   │   ├── medical-aid.js
│   │   └── province-risk.js
│   │
│   └── calculators/        # Quote calculation logic
│       ├── car-calculator.js
│       ├── life-calculator.js
│       └── medical-calculator.js
│
└── README.md
```

## API Endpoints

### Health Check
```
GET /api/health
```

### Get Insurers
```
GET /api/insurers/:type
Parameters: type (car, life, medical)
```

### Get Car Insurance Quotes
```
POST /api/quotes/car
Body: {
  vehicleMake: string,
  vehicleModel: string,
  vehicleYear: number,
  vehicleValue: number,
  coverType: string,
  province: string
}
```

### Get Life Insurance Quotes
```
POST /api/quotes/life
Body: {
  age: number,
  smoker: boolean,
  coverAmount: number,
  lifeCoverType: string
}
```

### Get Medical Aid Quotes
```
POST /api/quotes/medical
Body: {
  members: number,
  planType: string,
  chronicConditions: string,
  income: string
}
```

### Request Callback
```
POST /api/callback/request
Body: {
  provider: string,
  name: string,
  phone: string,
  email: string (optional),
  preferredTime: string,
  insuranceType: string
}
```

## Configuration

### Environment Variables

Create a `.env` file (optional):

```env
PORT=3000
NODE_ENV=development
```

### Rate Limiting

Current settings:
- 100 requests per 15 minutes per IP
- Configurable in `server.js`

## Connecting to Real Insurance APIs

This tool currently uses estimated calculations. To connect to real insurance provider APIs:

1. **Obtain API Keys**
   - Apply for partnerships with insurers
   - Get API credentials and documentation

2. **Update Data Sources**
   - Modify files in `api/data/` to fetch from real APIs
   - Add API key management

3. **Update Calculators**
   - Modify files in `api/calculators/` to call provider APIs
   - Add error handling and fallbacks

4. **Compliance**
   - Obtain FSP (Financial Services Provider) license if providing advice
   - Ensure POPIA (Protection of Personal Information Act) compliance
   - Add terms of service and proper disclaimers

## Security Considerations

- **No FSP License**: This tool does not provide financial advice
- **Data Privacy**: All calculations happen locally or on your server
- **HTTPS**: Use HTTPS in production (e.g., with Let's Encrypt)
- **Rate Limiting**: Protects against abuse
- **Input Validation**: All API inputs are validated
- **Helmet**: Security headers enabled

## Production Deployment

### Recommended Platforms

1. **Vercel** (Easiest)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Railway**
   - Connect GitHub repo
   - Auto-deploys on push

3. **Heroku**
   ```bash
   heroku create insurecompare-sa
   git push heroku main
   ```

4. **VPS** (DigitalOcean, Linode, etc.)
   ```bash
   # Install PM2
   npm install -g pm2

   # Start with PM2
   pm2 start server.js --name insurecompare
   pm2 startup
   pm2 save
   ```

### Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Enable HTTPS
- [ ] Set up proper logging
- [ ] Configure reverse proxy (nginx)
- [ ] Set up monitoring (e.g., PM2, New Relic)
- [ ] Database for callback requests (MongoDB, PostgreSQL)
- [ ] Email service for notifications (SendGrid, Mailgun)
- [ ] Backup strategy
- [ ] Terms of Service and Privacy Policy pages

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a demonstration project. If you want to build a real insurance comparison service:

1. Get proper licensing (FSP in South Africa)
2. Partner with insurance providers
3. Implement real API integrations
4. Ensure legal compliance (FAIS Act, POPIA)
5. Consider hiring insurance and legal experts

## License

This is a demonstration project for educational purposes. Not licensed for commercial use without proper insurance industry licenses and partnerships.

## Disclaimer

**InsureCompare SA is a comparison tool only**, not a licensed Financial Services Provider (FSP). We do not provide financial advice. All quotes are estimates. Always obtain official quotes directly from insurers and consider consulting a licensed financial advisor before making insurance decisions.

## Support

For questions about this code:
- Review the code comments
- Check API documentation in this README
- Open an issue on GitHub

For actual insurance quotes:
- Contact insurers directly
- Visit their websites listed in the comparison results

---

**Built with ❤️ for South Africa** 🇿🇦

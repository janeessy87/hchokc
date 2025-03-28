curl "https://api.postmarkapp.com/email" \
  -X POST \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -H "X-Postmark-Server-Token: 7d458dea-13cd-41fd-aaf6-34744ddd8267" \
  -d '{
        "From": "admin@hchoklahoma.com",
        "To": "dssolloway@writeme.com",
        "Subject": "Hello from Postmark",
        "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
        "MessageStream": "outbound"
      }'


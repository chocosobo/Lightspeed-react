이거만 고칠 떄

```bash
rm -r /root/git/Lightspeed-react
rm -r /var/www/html

cd /root/git

git clone https://github.com/chocosobo/Lightspeed-react.git

cd /root/git/Lightspeed-react

npm i @widgetbot/react-embed

npm install

npm run build

mkdir -p /var/www/html
cp -a build/* /var/www/html
cat <<EOF > /var/www/html/config.json
{
  "wsUrl": "${WEBSOCKET_URL}"
}
EOF
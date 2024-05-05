import network   #import des fonction lier au wifi
import urequests    #import des fonction lier au requetes http
import utime    #import des fonction lier au temps
import ujson    #import des fonction lier aà la convertion en Json
from machine import Pin, PWM

wlan = network.WLAN(network.STA_IF) # met la raspi en mode client wifi
wlan.active(True) # active le mode client wifi

ssid = 'Xiaomi_989B'
password = 'titus2226'
wlan.connect(ssid, password) # connecte la raspi au réseau
url = "http://192.168.1.3:3000/house"

while not wlan.isconnected():
    print("pas co")
    utime.sleep(1)
    pass

while(True):
    try:
        leds = [PWM(Pin(18, mode = Pin.OUT)), PWM(Pin(17, mode = Pin.OUT)), PWM(Pin(16, mode = Pin.OUT))]

        houses = {
            "Gryffindor" : [255,0,0],
            "Slytherin" : [0,255,0],
            "Ravenclaw" : [0,0,255],
            "Hufflepuff" : [255,255,0]
        }
        print("GET")
        r = urequests.get(url) # lance une requete sur l'url
        print(r.json()) # traite sa reponse en Json
        for i in leds :
            i.freq(1_000)
            i.duty_u16(0)

        def setColor (house) :
            for i in range(3):
                leds[i].duty_u16(house[i]*256)

        setColor(houses[r.json()["house"]])
        r.close() # ferme la demande
        utime.sleep(1)
    except Exception as e:
        print(e)
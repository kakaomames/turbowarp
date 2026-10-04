https://kakaomames.github.io/turbowarp/ Name: Clones Plus
https://kakaomames.github.io/turbowarp/ ID: lmsclonesplus
https://kakaomames.github.io/turbowarp/ Description: Expansion of Scratch's clone features.
https://kakaomames.github.io/turbowarp/ By: LilyMakesThings <httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/LilyMakesThinghttps://kakaomames.github.io/turbowarp/>
https://kakaomames.github.io/turbowarp/ License: MIT AND LGPL-3.0

(function (Scratch) {
  "use strict";

  const menuIconURI =
    "data:imaghttps://kakaomames.github.io/turbowarp/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ4AAAGeCAYAAACkfGcPAAAAAXNSR0IArs4c6QAAIABJREFUeF7tndl1HEeWQEFZ0ZovmTDGTHsiM9oTjTFjRbe84JwEWWChUJUZEW+Jt9z+6https://kakaomames.github.io/turbowarp/Get9yEVWg+O2https://kakaomames.github.io/turbowarp/0GgGYHvhttps://kakaomames.github.io/turbowarp/3+PdKVhttps://kakaomames.github.io/turbowarp/3zP98inYezQMCaAAlvTZj1XQlEk4rW5ZGTFknWiUAA8USIAmeYIlBVLlMQ7gYjpVVyzNtFAPHsIs++lwQQzCWi0wEIScaP2XYEEI8dW1aeJIBoJoFNDkdEk8AYbkYA8ZihZeEzAkgmRn4goxhx6HYKxNMt4pvui2g2ghttps://kakaomames.github.io/turbowarp/cFhFNAmP4EgHEs4SNSSMEkM0IpbhjkFDc2Ghttps://kakaomames.github.io/turbowarp/GeLJHsFA50c0gYJhcBREZAC16ZKIp2ngta6NbLRI5loHCeWKV7TTIp5oEUlwHmSTIEiOR0RCjrCLbIV4igTS+hrIxppwjfWRUI04Wt8C8VgTTrw+skkcvABHR0IBghD0CIgnaGB2Hgvh7KRfb28EVC+m0hshHinBIvORTZFABr8GEgoeIKfjIR4n0BG3QTYRo9LnTEioT6wfb4p4GsYe4TQMeuArI6DAwTE6GuIxAhtxWYQTMSqc6UYAAfXJBcTTINYIp0GQC10RARUK5ourIJ6iMUY2RQPb7FpIqGbAEU+xuCKcYgHlOu8EEFCtREA8ReKJcIoEkmucEkBANRIE8SSPI8JJHkCOv0QAAS1hCzMJ8YQJxdxBEM4cL0bXJICAcsYV8SSMG9JJGDSObEYA+ZihNVsY8Zih1V8Y4egzZcU6BBBQnlgingSxQjgJgsQRwxBAQGFC8fIgiCdwjBBO4OBwtPAEEFDcECGeoLFBOkEDw7FSEUA+McOFeILFBeEECwjHKUEAAcUKI+IJEg+EEyQQHKM0AQQUI7yIJ0AckE6AIHCENgSQhttps://kakaomames.github.io/turbowarp/5QI56NMUA4G+GzdXsCCGhfCiCeTeyRzibwbAuBOwLIZ086IB5n7gjHGTjbQWCAAAIagKQ4BPEowjxbCuE4gWYbCAgIICABvImpiGcC1upQpLNKjnkQ8CeAfOyZIx5jxkjHGDDLQ8CAAPIxgHhttps://kakaomames.github.io/turbowarp/3Zrt8n1XRzh9Yhttps://kakaomames.github.io/turbowarp/N6xBAQDax5MVjwBXpGEBlSQhsIoB89MEjHkWmCEcRJktBIBgBBKQXEMSjxBLpKIFkGQgEJoB8dIKDeBQ4Ih0FiCwBgSQEkI88UIhHyBDpCAEyHQIJCSAfWdAQzyhttps://kakaomames.github.io/turbowarp/hLMIjmkQKEQAAa0Fhttps://kakaomames.github.io/turbowarp/EscEM6C9CYAoGiBJDPfGARzyQzpDMJjOEQaEAA+cwFGfFM8EI6E7AYCoFmBJDPeMARzwArhDMAiSEQgMA7AQR0nQiI54IR0rlOIkZAAAKfCSCf84xAPCd8kA7tBAIQWCWAfF6TQzwv2CCd1XJjHgQgcCOAfJ7nAuJ5wgXp0DggAAEtAsjnK0nE88AE6WiVG+tAAAK8fHjxXFYB0rlExAAIQGCRAC+fX+B48fxkgXQWq4lpEIDAMAHk8wNVhttps://kakaomames.github.io/turbowarp/EgnOGaYSAEIKBEoLuAWosH6ShVEctAAALTBDrLp614kM50nTABAhBQJtBVPi3Fg3SUq4flIACBZQId5dNOPEhnuT6YCAEIGBHoJp9W4kE6RlXDshCAgJhAhttps://kakaomames.github.io/turbowarp/m0Ehttps://kakaomames.github.io/turbowarp/SEdcFC0AAAsYEusinhXiQjnG1sDwEIKBGoIN8yosH6ajVAwtBAAJOBKrLhttps://kakaomames.github.io/turbowarp/E4JRLbQAACEBglgHhGSQUcx2snYFA4EgQgMESgsnzKvniQzlBuMwgCEAhMoKp8SooH6QSuJI4GAQhMEagon3LiQTpTOc1gCEAgAYFq8iklHqSToII4IgQgsESgknzKiAfpLOUykyAAgUQEqsinhHiQTqLK4agQgICIQAX5pBcP0hHlMJMhAIGEBLLLhttps://kakaomames.github.io/turbowarp/EkTDqODAEI9CaAeDbGn9fORvhsDQEIbCWQWT5pXzxIZ2vOszkEIBCAQFb5pBQP0gmQ8RwBAhAIQSCjfNKJB+mEyHUOAQEIBCKQTT6IJ1DycBQIQAACKwQQzwq1wTm8dgZBMQwCEGhHIJN80rx4kE67OuLCEIDAJIEs8kkhHqQzmX0MhwAE2hLIIhttps://kakaomames.github.io/turbowarp/w4kE6beuHi0MAAosEossH8SwGlmkQgAAEohJAPILI8NoRwGMqBCDQmkBk+YR98SCd1jXD5SEAAQUCUeWDeBSCyxIQgAAEIhJAPBNR4bUzAYuhEIAABE4IRJRPuBcP0qGGIAABCOgSiCafUOJBOrrJxmoQgAAEbgQiyQfxkJcQgAAEGhBAPE+CzGunQeZzRQhAYCuBKPIJ8+JBPFvzkc0hAIEGBBDPXZCRToOM54oQgEAIAhHkhttps://kakaomames.github.io/turbowarp/3Fg3RC5CKHgAAEGhHYLhttps://kakaomames.github.io/turbowarp/E0yjZuCoEIACBg0Br8fDaoQggAAEI7CGwUz7bXjxIZ0+ysSsEIACBG4Fd8kE85CAEIACBpgRaiYfXTtMs59oQgEA4Ajvks+XFg3jC5R4HggAEmhJoIR6k0zS7uTYEIBCWgLd8XF88SCds3nEwCECgOQFP+SCeHcn2https://kakaomames.github.io/turbowarp//+tehttps://kakaomames.github.io/turbowarp//teOE9Te857v2U1hXzsPuN0UgZLiafPaGW16MylBhttps://kakaomames.github.io/turbowarp/xKy4Lhttps://kakaomames.github.io/turbowarp/S4wn8lQxhYh4CUftxdPafFYN8HHpO7aFL0537h35V2kmXKNcQKlxFNSOruaYDcJReHMa2i8ezEyNQEP+bi8eEqIJ2IDjCKhRzbSF0IG1gd76T1TtycOX5VACfG4S+eqaa00i6s1o2Xgyh1n7zDKZOYso2vOntVhttps://kakaomames.github.io/turbowarp/Mwdrhttps://kakaomames.github.io/turbowarp/C+jIhttps://kakaomames.github.io/turbowarp/OLPOz9r+Zi+eFylM9O0RhvFzJqydLeZPXrP2d1nuVydY3a92fN6jb+6p9c52GeewFUONoytpXxqiOcqaZ6l4Vkiraw3n+o+M7QLZpXNs3OsruVDbn0XbebrJ2HmCIHRPGwW15TicXvtjCbNiHwka40k+M4xGkUj5Xhttps://kakaomames.github.io/turbowarp/BulaO1mO7K3Be2QfxsgIzOZhs7haycfsxZNCPEfKHok0m3yyVN8zW6NgOnDSjo4Gd+0zsd4PAiv53CyeqcSTRjqdClBaMCtF2onv2V2l7OFoQ2A1p5vF00I+Ji8exGNTJ6JVpcWyWqSiQxeaLOVfCEWIq0jyuVksU4jHTTqrT+UQWe98CI1CkRSq83XDbqcRh7CXS3YwST43jKO2fNRfPIgnYAFqFIqkUAMi2XokjXhsvUCBzSX53DB+ocXjKh1ePHPVLy0WSaHOnbTHaGk8elCyu6Ukn5vGTlM+qi8exDNWhttps://kakaomames.github.io/turbowarp//3r398DPzvhttps://kakaomames.github.io/turbowarp/8emyQdJS0WSaFKzz4https://kakaomames.github.io/turbowarp/57v2VQ39q8OIY3JJBeG3xGQ5HPTuCGehttps://kakaomames.github.io/turbowarp/5Ikse4Ckebn1tj1CiWgLw1Ohttps://kakaomames.github.io/turbowarp/HwF1GGnExzuWSy0tyuWnMQorhttps://kakaomames.github.io/turbowarp/bUTUD7aTfCx4EVNUaNYJMWq2L2sOd+OKuI9c1+N2Mzsx9i1v8Nz49Y4XlryUfuorat4vJqg+KdyrWLZJJ8dnN0EpBUbhDJOQJLHjeMVSjzbpLPx1bOzES41RM1ikRTteGv4GBmB9XEY0xeQZnwWGLebIsnh5rHSkhttps://kakaomames.github.io/turbowarp/Ki2e7eI6qkSTSRNVFaYJLLyDNgnHgHZG1qYA04zOR0y2HSvK3eZxCiCeEdBxePlGb4JSAtAtGUrwn3S4DazMBaceopVUGLi3JXWIhttps://kakaomames.github.io/turbowarp/vd6xC+eUOIxevlkaYSXzVC7YCTF+6I3ZGJ9yXuhttps://kakaomames.github.io/turbowarp/z0doh2n1XNUnifJXeKzVzzhpGMgnmyN8LIZahaNpHifNLWMrC95rzRvzRit7N9hjiR3ic97hkg+chO9eMKJR5JMhRrh7SpPvwzXKhpF1lmF85gyqr98oBWnDhJZuaMkf4kN4vnIOUkiPSRulUb48qdxjcJR4l2JterrRyNGKw25yxxhttps://kakaomames.github.io/turbowarp/hKbfeKp+tqp1ghttps://kakaomames.github.io/turbowarp/NEONopEU7V1jq8ga+SQxlySHNWooCaarY65+3Lb8UVso8UiSqPBrhttps://kakaomames.github.io/turbowarp/5qHx8DSYsG1le1qPv3faTxujxt0wGSPCYmH0mDeBTqp+pP4https://kakaomames.github.io/turbowarp/f+fzxm5ySpGAbvHZOv19boU+TW6F2PUeSx8Rkj3gqvnaqS+f9IyCpeCTF2kg6yOe6728fIcllxPMpfCuvnqWP2qqJp4N0ooinC2tV+dDo9D2FeNSYuogH6ajFy3WhCK+dbtJBPq4pPrcZ4pnjdTF6Vj7TLx7Eoxovt8UQjxvqLxuhttps://kakaomames.github.io/turbowarp/P0eXj26AUQ8qjz7iEeSOD+Rhttps://kakaomames.github.io/turbowarp/oJfLd4OrF+VtFi+SAe1UYp+o8KE4svsTAVD68d3dz3Wm23dI57Ih6Ff+KchqdXMpIfXInD0zjMyGfqo7ZK4unUCHeLpxPrs87Iq0fPG+KVEI8Y4eMC9cUjSZqGP30jHvUaW1oQ8Sxhs5kk6SG8ePxePLx2bPLfY1WReCQF2lDyhttps://kakaomames.github.io/turbowarp/FEPleEnP5ckteI52WQRl89wx+1VRFPt499RNI50ktSoIhhttps://kakaomames.github.io/turbowarp/zfcqjY9YZ456WrPNolijnhepAjimawdQUPoxnqUrOjVk6gJjfKhttps://kakaomames.github.io/turbowarp/nAzvhttps://kakaomames.github.io/turbowarp/2gQliryqeKq+djr9dJXrxCKTTkfVoXxOJ59gkQQMaYiHMr6E9qg1KEPsR+Qx91IZ48mYv4okXO8TzMyaIZy05g8sH8TyEteNHP7vE05H1TBcRySd44xnigHSGMD0dFDz+KuIJ9doRftndsRkinvX6tpyJeP5tibf+2snlhttps://kakaomames.github.io/turbowarp/lRG+LJncOIJ2b8Ehttps://kakaomames.github.io/turbowarp/iEWUm4hHhm5sseJ53fO0ccBHPXIp5jUY8iEeUa4hHhG9uMuKZ44V4pnl5TUA8iEeUa5XFw8dsotQIMZkXT4gwfDkE4kE8y5kZXDq3e539ksHpdzyIZzk1wkzcIZ6uH2vOBl0kn2OzJA3oKRfBpxeznMuNTxJ3xNP0P92yQzpHkSOesVYnFhttps://kakaomames.github.io/turbowarp/ZNhmahttps://kakaomames.github.io/turbowarp/IZS5THURlihttps://kakaomames.github.io/turbowarp/b2tiSecK+dA74gUTs2Q8SzVteWs0xl8+rgkRuVoKYt4xR27cixfALtlXxeftSGeMKm3vDBEM8wKrOBW0ST7SWEfK7zL5lwrr7nQTzXIU87AvHsC1044TxDEbGZIaHPkYoYo4my4sXzr39M4KoxFPH4xzGFcJJ+Z6AaTYngkstAlePFYlPiCfkxGhttps://kakaomames.github.io/turbowarp/xTOcL4plGtjwhpXA6CwjxLOf67MRn8nn6URvimUUbhttps://kakaomames.github.io/turbowarp/xHI5T8dCYozihttps://kakaomames.github.io/turbowarp/zFFCOB0FJMjt1https://kakaomames.github.io/turbowarp/GvqFVIZ4N0L2https://kakaomames.github.io/turbowarp/NIIEY9ZCEpK556WJHfMqCstjHiUQF4vg3iuGaUd8bIJSpqHoDgrv3jKC6eDfAS5zYtnrk0injleaUafNkLEoxrHVtKpLCDEo1oXZ4sNiSfs9zu3mwkSpuJP4ZeNEPGoFdgla7Wdgi4kyaVoVxL0EV4888F8lM+XXy5APPNQd8wYboKSZiEozkqSH2a9IxG895Tkhttps://kakaomames.github.io/turbowarp/dZhttps://kakaomames.github.io/turbowarp/YT5DbimQ8k4plnFm7GVCOUNApJcRb5b7ZNsQ6XKUYHkuSU0ZGml5XkdoX7TwOTTUA8Mn7bZ083QkmRSIqzgHimWhttps://kakaomames.github.io/turbowarp/PDscDSPLK8Zgvt5Lkdva7b+https://kakaomames.github.io/turbowarp/Kp7wH7MdwCQJk7wZLjVCaZEIeGf+uG2JtWJBX7Hbfb73q0pzS5HX9FKCvE5972lQehPu5fPpOx7EowdZe6XlRiNtDpICTSr6ZdaLQb+SzMyy3mdP24QleS2tqZmAFhqbWzzCV49mkXvlhLiZSApFUqAJxSNmPZgUHnnodZeU8pHktaSeBvOj4rDW4jkC6lH0Womj0jykhSIo0nasLwhttps://kakaomames.github.io/turbowarp/i4dKHp3dTZpjWgUzuo4gp1OKdpSL4TjEk+https://kakaomames.github.io/turbowarp/VK3WLKRNQVKkSUSvxvpF4e4SzuNxTO8pzTPDpvdlaUlOZ7qnJ9OLvfKLhttps://kakaomames.github.io/turbowarp/hxW5ZXj1qTkBaKpEibiyeKcO57glpePTYaaZ55NklJTme6pyfTFfGk+MWC+4tJEidBM1RvDpJiEbKOLnp11gny64iJxb3TfAwlyWlJLQUSwY6j3F49Hhttps://kakaomames.github.io/turbowarp/V1k08kZthyIYgKdTAjdiCdcRXzlmTUWeQoTFL8jnhttps://kakaomames.github.io/turbowarp/XZYZWDhttps://kakaomames.github.io/turbowarp/OIp+nGbehP42fRhttps://kakaomames.github.io/turbowarp/yicAuuIotdmnU04phhttps://kakaomames.github.io/turbowarp/Rhttps://kakaomames.github.io/turbowarp/OiGdAhttps://kakaomames.github.io/turbowarp/pDEM9PptGahWYzfLybSD6SQr3L30i8LVnrl6z9ipo83k8bWT6SfI58https://kakaomames.github.io/turbowarp/s0Ee2AeAI2Q83Cf9bgReIp9uqxZi2qzo2TNbkgno2BDLp1DfHQDJ+m16tXhVg8hXhrNdhILzitXqPFJvSrhxePVrpMrVNHPEWaoVaxXzVCsXwkBRvklenFeqoigw3WYhT21SPJYz5qW87WT+JJ9xttj9eWJFGAZqhV5FfSOa4qFo+S6I9lRs67nOEnEzV47zq7BY9Xa2pwCvvqkfQMxCNKw0M+779OnV48yZuhVoGPNMNI4tkhHhttps://kakaomames.github.io/turbowarp/WouoMMlmFV8RGjXi2ZRjieYF+pIFrRU2lsCdfD13ls4O1Vp7sWkeLWbiP3BDPrpR6qyUexVeP5https://kakaomames.github.io/turbowarp/iGoU9K8po4vHivYP1tupW3FiDG+JRDEjypRDPRQBnhttps://kakaomames.github.io/turbowarp/pKPkiLevWMHeWzhttps://kakaomames.github.io/turbowarp/VKXkSbI2UX8rue1VdPxI8OoyXMyXnqiUf51XNjt9rcr3JBo5hXz6YiHgPehttps://kakaomames.github.io/turbowarp/eJzPrqbBn+XCNXS7x6kI44XWuKx6AZWn0UJC1maZNWkhttps://kakaomames.github.io/turbowarp/qT43Or83drMXVGmABKcNw4lnpFYhHnIl1xbOSUAM4pY3+cQtpIUvPoyIeI9bashttps://kakaomames.github.io/turbowarp/NeiC9wg+RMgz5cdthttps://kakaomames.github.io/turbowarp/iIdlRxFPIsYpQhttps://kakaomames.github.io/turbowarp/2FZaxBpnehttps://kakaomames.github.io/turbowarp/HH78tUniYZvTy0RBQFNY6oPeuImUZ8tVzJR+Eo5p07+Ip8Xd4XmExbIbShigt4HDiuSpehdRdvXMU1goIti8hZRlWPNvJ9jpAbfE4NMNVAUkKeLUBv0pttVePE+9Z5pFYV2gvEp6Ip0IGyO9QXzyOzfAWjisxiAp38i+LjqZIRvmM8I7IejQmUcdJmSKfqJH1O1cP8WyQz30Ihttps://kakaomames.github.io/turbowarp/y7Ohttps://kakaomames.github.io/turbowarp/+LYrwldhWFs8snpX7js6xYD26d9RxiCdqZPKcq494NstHKyUsG6GqfArwtmStlQ+71hHJhhttps://kakaomames.github.io/turbowarp/rd4UtzL69xEMzvEw85PMLEeJ5nS4i8RzLIhttps://kakaomames.github.io/turbowarp/LWqw8oJ94ksvHuhmqiycxb2vWmRsL4skcvf1n7ymepM3QqxEinx+F6cV7fxtYO4FIPrx41qAXmdVXPLcAGv9dH8088WyE3eXjyVozRzzXQjyetGvthXgSvX68m6GJfJLw9madsa0gnoxRi3FmxJPo5bOjGXaVzw7WMVrC+CkQzzgrRn4mgHgeMyLwR2+7mqGZfAhttps://kakaomames.github.io/turbowarp/fnaxztSgEE+maMU6K+J5FY+AAtrVDE3Fhttps://kakaomames.github.io/turbowarp/TFuYt1rPZwfhqReK4uyi8fXBFhttps://kakaomames.github.io/turbowarp/eeI5yp8gQS0sxm6yCfQC2gn66uU3P3npsJ5djkktDvk6vsjnlGkmwUUoRG6ySeAgCLwHk1Nj3Husjm7FCLyCLnpHohnFu9GAUVohq7y2fgxXATWs6mpPT6UbF5dDglph91lPcQjwewsoUjNcIuAHF9CkVhLUnRlbgrh3F8M+ayEeescxKOJ31hE0ZrhNvk4vISisdZM01drpRPO40UQkEeaqOyBeFQwXiyiJKSIzXC7fM7QC7hHZG2VqumFg4CsUsNsXcRjhvbFwgWbYVj5FGStma7lhIOANNPDdC3EY4r3yeKFm2E4ARVmLU3b8tLhOyBpipjORzymeHuJ57htKPkgnqfZ3Uo6NwJhttps://kakaomames.github.io/turbowarp/+Pd6U73Qzze4WjQDMPIR8D6SItqhttps://kakaomames.github.io/turbowarp/O0FA4vH+8ON7Qf4hnCpDhI0AyzNcLtAhKwriae9tLh5aPYxORLIR45w7kVmjXDzPLJJvpXiYh0HsjwsdtczzIYjXgMoF4uKZBP1ma4TUANWhttps://kakaomames.github.io/turbowarp/nH9I5qUYEdNmqrAYgHiuyZ+s2bobuAhKwzv5xWxTpPP6wFOVc7yWKfHZ0wDfEswN702b4qeF4FryAd9oX5phttps://kakaomames.github.io/turbowarp/u2a2FqctUvLMRdeoxN0M8eyIjaARZv0https://kakaomames.github.io/turbowarp/GVD8Sh6AW+thuqZZl7N25qN1z14+Xhm54+9EIhttps://kakaomames.github.io/turbowarp/8x87NmqGww3ESkIC1tlEP8x6Me+tZfPqWNb34iO3xYRYnIZ4FsGJpzVphssNQ1NCsBan6y7hPB58OZ9GCGjm3Mh+jccgnl3Bb9AM1ZqERkMozluN9ZN6iCKd+6OZ3Vcj13b1lET7Ip5dwRI2wgwfAak2B2lDEPKO2HytG3H0Ohttps://kakaomames.github.io/turbowarp/3V82xG1Bpru3qKYn2RTw7g1W4Gao3BGkzELKOLHpt1hmEYy1dvvOxbYyIx5bv+epFm6FVIxhttps://kakaomames.github.io/turbowarp/HSAh74gN2Yr1zrJY2VubA+JZicL4HMQzzspmZLFmqN0A7pv9bvFEhttps://kakaomames.github.io/turbowarp/VYsrZJdttVtXkgH7t4fTuhttps://kakaomames.github.io/turbowarp/v7X7https://kakaomames.github.io/turbowarp/ttmDlUwJC8VRuhhttps://kakaomames.github.io/turbowarp/+xvsfv8mTqRBvzUYb8TW3Gmw1LtKPd1cvUHzethttps://kakaomames.github.io/turbowarp/+5xviiRDkIs1QreBhttps://kakaomames.github.io/turbowarp/kmCCK+eCLL3YB2hNFbPoMYH+ayG4OU8xKOOdHFBBfFUaoZnP32LxXOAUuC9+4Wg1Vh332OxYi6nafF53wj5XPKeGYB4ZmhZj1Vohjvlo1XoV40wing6sLZOeev1tXIS8ehGCvHo8pSthnihttps://kakaomames.github.io/turbowarp/8XP7vLRaKhXgpclc5zZGqx49ejGhttps://kakaomames.github.io/turbowarp/Ho8pSvllQ+WsU92gwjicf75aPBepSzPKFjrKDBjFePXiwRjx5LnZWUxHM7jFeD0Sjs2bN2lc8O1jrJvXcVDW7IRyeGiEeHo+4qyeSjUdCz0jmARxOPx8tnF2vdBN+zmgY7xKMTO8Sjw1https://kakaomames.github.io/turbowarp/lUTykRb0inRuwCPKx1JAUtaWZ9MvAv0Vxfz47TaVoHyI51iNv0SqwlRnEWXxWDUccSGhttps://kakaomames.github.io/turbowarp/H2dEZAq4jk2asJbIvmReEQfo5GvvHpkUT6kc6zhttps://kakaomames.github.io/turbowarp/n+IRwbTZLZBM9QWkLSQNRphZPlo8o7A2iTPnReVckQ8soAhHhhttps://kakaomames.github.io/turbowarp/n9lG8tFqiNIiDiUeo5fPLVGkd43A2ifpbXeRckQ8svggHhhttps://kakaomames.github.io/turbowarp/v9lB5SMtYGkjvg9A9FePhnwkvDVZ+yW+3U4Slu+n4rue5eAgnmV0zhMNxXhttps://kakaomames.github.io/turbowarp/k9nmJC3e2f3OqKuJhttps://kakaomames.github.io/turbowarp/jVs8o7Emvn7DfZTsoT8ayHBfGshttps://kakaomames.github.io/turbowarp/Of6SSfmhttps://kakaomames.github.io/turbowarp/MJcWrKZ3bmTPKZ5S3hLXWx6r+SW+7o4gpL57l4CCeZXSbJjrL5+qnc0nhWojnOG9m+TzLqhuniKw3VYHathKmfNy2HoYv4jmW4leq14G6zNwoH837WYmnonyk3C1ZS8+2cz7i8ahttps://kakaomames.github.io/turbowarp/k86x88evUyMhttps://kakaomames.github.io/turbowarp/0As7VhAPpbNUPXVcwQoOW9L1kv5G2iSSD583DYdScQzjSzghKQN0aMRIp8f+erBOmBlDB8J8QyjUhmIeFQwBlgkoXy8mqG6fBK+frxYB6iEpSMgniVsy5MQzzK6gBOTycezGXaXjyfrgJVxeSTEc4lIdQDiUcUZYLFE8vFshibiSfTy8WQdoAqmj4B4ppGJJrwUz7Eqv9kmYrt3cgIBeTdDhttps://kakaomames.github.io/turbowarp/kkEJA3673Jv7Y78lnjNjvrXjrH3Ehttps://kakaomames.github.io/turbowarp/1YZ4ZnEGHB9YPrsaYVf57OIdsCpeHgnx+EQL8fhw3r9LQAHtbISm8gn6+tnJe38BjJ0A8Yxxko5CPFKC2eYHEtDuRmgun2AC2s07Q6kgHp8oXYqHj9t8AuG+SwABRWiELvIJIKAIrN1zfGFDxLMAbXLKo3SefseDeCapZhy+SUJRmqGbfG65sYF3FNbRywPx2EcI8dgzzrWDc0OM1Azd5eMsoUisIxcF4rGPDuKxZ5x3BwcJRWuG2+TjJKFovCMWB+KxjwrisWdcbwdFIUVshNvlc5YxQvYReUcrEMRjH5Fh8fA9j30w0u4gaIZRG2FV+UTlHSn3EY9tNJ5J5+UvFyAe22CkX72gfI6YhBRQUdYRagDp2EcB8dgz7rND4WYYTj6FWe8uGMRjHwHEY8+4zw4NmmEYATVgvatwEI89+Wnx8HGbfVDS7tCkGYaQTxPWr2rhSg6S77Gu1j6thttps://kakaomames.github.io/turbowarp/4F0sv29Uo6phttps://kakaomames.github.io/turbowarp/xIJ5Lrn0HNGuGWwUkYH0kqKQx70zwGSms3nFmjy8sEM9leiCeS0QMmCLQsBluk09H1https://kakaomames.github.io/turbowarp/+PZWOt8EzAhJJ59gQ8VzGaFk8vHou2fYc0LkZ7mg4At4zzThKMkukMHpfyR7vnHbkQZQADZzjTDqXH7UhngHCXYc0aoZPm5Rn4xGwzvZxm1gIgx8vivbxjH3https://kakaomames.github.io/turbowarp/oJ4kgYhttps://kakaomames.github.io/turbowarp/LEFzXD0p9IIDIYalHUjErDOJJ4h1oNJcZZj4n2s4z14x8jDEhttps://kakaomames.github.io/turbowarp/k6GQ+G83wefSsmpKAdxbRi4XwEJFX9xbvYxXjzP3g4exi8fBxW6Fs0LyKoBG2+Slcs0E14C0WwpP8fiYf0T6aMdWsx0BrXUln6DsexBMootGOQjMcj4i0YcF6nPXJy0cknWNdaRyXb5FnIuLJE6ucJ6UZzsVN2rSK8xZL4SQax8tHZX1pDOcyJuVoNfHw6kkZhttps://kakaomames.github.io/turbowarp/tDCxthhhttps://kakaomames.github.io/turbowarp/cVJrVLRLSpiXkHf27HlXWVtkvjaHVuYKsOyKd4https://kakaomames.github.io/turbowarp/aEE+QqEY8Bs1wPCrSpiVkHV304cUjjd94pqQdiXjShi7ZwWmGcwGTNi94https://kakaomames.github.io/turbowarp/HWHC2NneZZgq6lLh5ePUEjvftYCo2w1https://kakaomames.github.io/turbowarp/i0ualwDvyR25hXz3SuO2uU4f9R6Uz9VEb4nGIXNYtaIbjkdNoYPAe5601UiNuWmcJug7iCRqY0seiGY6HV9rEFFi3emWOR+b5SGm8pPsnmW8mHl49STJgxzFphuPUNRoZvMd5S0dqxEt6huDzZ6Qhttps://kakaomames.github.io/turbowarp/VEb4gkhttps://kakaomames.github.io/turbowarp/d3HoxmORUCjkSmx5uVzETKNWI1lRepRiCd1+JIfnmY4HkCNhgbvcd6rIzXitLp3onnm4uHVkygbdhyVZjhGXaOhKbLm5fMkbBoxGsuG1KNmpbP0URviSZ0j9oenGY4z1mhs8B7nPTtSIz6zeyYc7yYe5JMwOzyPTDMco63R2JRZhttps://kakaomames.github.io/turbowarp/L5GTqN2IxlQepRK9JZfvEgntS54nP4Rg1R9JceNRpcI9ZH8op4z2https://kakaomames.github.io/turbowarp/Rmxm9ks4FvEkDFrpIxs0w8https://kakaomames.github.io/turbowarp/jS83Q63mBm+bctKKj83pthttps://kakaomames.github.io/turbowarp/qLh5ePdtjHv8ARs0wooCWxXNcRqu5NeAt4rxaMVrxWdhttps://kakaomames.github.io/turbowarp/6LxV6Yg+akM8QbMh2rEMm2EEAak0Qs3GVpi3CuvV+tCM0eoZgs1DPMECwnEeCBg3wx0CUm+Cmo2tEG91zpLi1IyR5BxB5m4TD6+eIBmQ4RgOzfCGwehttps://kakaomames.github.io/turbowarp/vmzeBLUamyNrC+mbc5bUi1aMJGcIMFciHfFHbYgnQAZkOoJzQ9Roiq5NULOpbWD9mIojPwC48tWqFc04aZ3JeZ3t4kE+zhHPvl2AhhgaoWZTg7VdqDXjZHdKk5Wl0lF58SAek9jWXpSGeB5f7aYGb5t60o6TzSnVVw0jHuSjHtv6C9IMX8fYoqHhb01JAAAKFElEQVTB26amLGJlc1KVVTWkhttps://kakaomames.github.io/turbowarp/biQTwqMe23CM0Q+VTI+kbyCSce5FOhgjbcAfkgnw1pp75lhttps://kakaomames.github.io/turbowarp/loSUf1xYN41FO514II6Hm8LRoarG1qyyJWNiddWhXxLGFjUngCXRri0aBm7mrV0GbOED55nhzwnpvXXa1iFYhttps://kakaomames.github.io/turbowarp/WPHw6gmQHRWO4NUkvFk9NqWZe1o2tJlzeDNb3e8ZL697WsZqlYdwnqZ01D9qQzzC6DL9FwGvJuHhttps://kakaomames.github.io/turbowarp/KwRjd7To5mNnsWD2eoeV5y87nh1jtX7bZoXXjzIZ1NmVN3Wq1FY8BttPqN3HF1PcpfRs0j2sJg7w8brjjNnsmCitKa2dExePIhHKdos85mAV7PQ4j7bdEbvN7vu6n1Gz7O6vta8VR5e91s9nxYfhXXSiAf5KESbJZ4T8GoYhttps://kakaomames.github.io/turbowarp/ylTWb0btJ9Zu82eq7ZdVfHa93f615a513lJZhnIR2zFhttps://kakaomames.github.io/turbowarp/iEUSaqeMEvBrH2Ym0m8ronbT3HaU+er7R9UbHWd3X6z5W5https://kakaomames.github.io/turbowarp/ltzgunXiQz2KkmbZOoEoTmbnHzoY2c86VqHrdzfoet7t73WeF9ZM5VtIxffEgHqXos8w6AY2GsqtZzJx91xmvIjNyhyhnHznr1X1https://kakaomames.github.io/turbowarp/jzKfQfOmlY8yGcgugyBwCsCM80wUUMLhttps://kakaomames.github.io/turbowarp/AZ3pJLJIiVpXTMXzy32Hhttps://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/fvkjgxFwJtCcw0wwQNLXwcZ3hLLhM4VtbSQTySxGEuBLwIzDbDwE3NC5lon1neq5sFjVMZ8fCR22pmMg8CPwnMNsOgTS1NPGd5r14sWJw8pOP24kE8q1nJPAjcEZhthsGaWrpYzvJevWCgOJUThttps://kakaomames.github.io/turbowarp/JZzUrmQUAgn2NqoMaWLpaN5OMlHdcXD+JJV3IcOCqB1WaIgNYiusp7drfN8SkrHuQzm4mMh8ALApJmuLnBpYyphPfMhTfFxlM67i+eG39+vXomExkLAQP58BHcfFoVlY+3dBDPfOoxAwKxCGg0w0https://kakaomames.github.io/turbowarp/ZccCOXgaDd5XWznHo414+MjtKvP4cwhMEtBoiM4Nhttps://kakaomames.github.io/turbowarp/KGcYZrsL66jVMsdkhn24sH8VxlHX8OgQUCmg3RqfEt3DLGFE3Wz27kxL+deJBPjPrhFMUIWDREpyaYLhIWrG8QHJjvks7WF8+NL79okK7cOHB0AlYN0aEZRkf75XxJWe+UDuJJl+UcGAKDBCwaIuJ5Dj8hhttps://kakaomames.github.io/turbowarp/bi4SO3wUbCMAjMEtBuiIjndQQSsd4tnRAvHj5ym+0mjIfABAHNhoh4zsEnYB1BOohnon4ZCoG0BLQaIuK5ToHgrBHPkxDyiwbXec0ICCwRkDZEpDOOPSjrKNIJ9eLhu57xvGYkBJYIrDZEpDOPOyBrxHMSRl498znODAgME1hpiIhnGO+ngbOsDTlHkk64F88taMhnLc+ZBYEhAqMN0bARDp2zyqAR3oaso0knrHj42K1KxXGP0ATOGqJhIwzNxPpw98wdGEeUDuKxTjLWhwAEILCRAOJZgM9HbgvQmAIBCEDg7e0tqnRCv3j4vofagQAEILBGILJ0EM9aTJkFAQhAIDQBxKMQHj5yU4DIEhCAQAsC0aWT4sXDR24taoVLQgACCgQySCeVeI7D8vJRyEyWgAAEShLIIp104kE+JeuFS0EAAkICmaSDeITBZjoEIACBCAQQj0MU+MjNATJbQAACKQhkk07KF88tE5BPiprgkBCAgCGBjNJJLR6+7zHMZpaGAATCE8gqnfTiQT7ha4MDQgACBgQySwfxGCQES0IAAhCwJoB4rAkPrhttps://kakaomames.github.io/turbowarp/3PQOQGAIBCJQgkF06JV48t0xCPiVqiktAAAInBCpIp5R4+L6HeoUABCoTqCKdcuJBPpXLjrtBoC+BStIpKR7k07c4uTkEKhKoJp2y4kE+FcuPO0GgH4GK0iktHuTTr0i5MQQqEagqnfLiQT6VypC7QKAPgcrSQTx98pibQgACiQggnkTBenVhttps://kakaomames.github.io/turbowarp/o5PgSByBQg0IVBdOi1ePLdcRT5NqpZrQiAxgQ7SaSUevu9JXI0cHQINCHSRTjvxIJ8G1csVIZCQQCfptBQP8klYlRwZAoUJdJNOhttps://kakaomames.github.io/turbowarp/Egn8JVzNUgkIhAR+m0Fhttps://kakaomames.github.io/turbowarp/ySVSdHBUCBQl0lU578SCfgtXMlSCQgEBn6SCeuwTl160TVCtHhEByAt2Fcwvft+RxVD0+8lHFyWIQgMAdAaTzCwbieSgN5EOvgAAEtAkgnc9EEc+TDEM+2mXHehDoSwDpfI094nlRD8inb6Pg5hDQIoB0npNEPCcZhny0yo91INCPANJ5HXPEc1EPyKdfw+DGEJASQDrnBBHPQIYhnwFIDIEABN4JIJ3rREA814w+RiCgCVgMhUAzAghnPOCIZ5zV+0jkMwmM4RBoQADpzAUZ8czxQj4LvJgCgcoEkM58dBHPPDPks8iMaRCoRgDprEUU8axx43sfITemQyAzAYQjix7ikfHj9aPAjyUgkIkA0pFHhttps://kakaomames.github.io/turbowarp/HIGSIfJYYsA4HoBJCOToQQjw5H5KPIkaUgEJEA0tGLCuLRY8n3PgYsWRICuwkgHP0IIB59prx+jJiyLAS8CSAdG+KIx4Yrrx9jriwPAUsCCMeS7tsb4rHly+vHgS9bQECTANLRpPl8LcRjzxj5ODFmGwhICSAdKcGx+YhnjJPaKP5bb2ooWQgCagQQjhrKoYUQzxAhttps://kakaomames.github.io/turbowarp/UEISJ8pK0JglgDCmSWmMx7x6HBcWgX5LGFjEgRUCCAdFYxLiyCeJWy6kxCQLk9Wg8AZAYSzPz8Qhttps://kakaomames.github.io/turbowarp/4YvJ8A+QQJBMcoTQDpxAgv4okRh49TIKBgAeE4JQggnFhhRDyx4oGAgsaDY+UkgHBixg3xxIwLH78FjgtHy0EA6cSNE+KJGxtePwliwxHjEUA48WLyeCLEEz9GCChRjDjqPgIIZhttps://kakaomames.github.io/turbowarp/72Z0RzyyxAOP5BYQAQeAIYQggnDChGD4I4hlGFWsg8okVD06zhwDS2cNduivikRLcPB8BbQ4A228hgHC2YFfbFPGoody7EALayhttps://kakaomames.github.io/turbowarp/dfQggHhttps://kakaomames.github.io/turbowarp/O1rsgHmvCzusjIGfgbOdCAOG4YHbbBPG4ofbdCAH58mY3GwIIx4br7lURz+4IOOyPhBwgs4UaAWSjhjLsQognbGj0D4aA9Jmyoh4BhKPHMvpKiCd6hAzOh4AMoLLkMgGEs4wu7UTEkzZ08oMjIDlDVlgngHDW2WWfiXiyR1Dhttps://kakaomames.github.io/turbowarp/EhICSTLnBJANiTIQQDxkAdfCCAhkkKTALLRpFljLcRTI44mt0BAJljbLIpw2oR6+qKIZxpZzwlIqGfcZ2+NbGaJ9RyPeHrGXXRrJCTCV24ysikXUvMLIR5zxLU3QEK1https://kakaomames.github.io/turbowarp/vqdsimZ9y1bo14tEiyzhsSqp0EyKZ2fD1vh3g8aTfbCxHlDjiiyRhttps://kakaomames.github.io/turbowarp/yKdHPJGjU+hsSChHMJFNjjhlPyXiyR7BpOdHRDECh2hixKHbKRBPt4gHvi8ysg0OkrHly+rjBBDPOCtGOhNARDLgiEbGj9l2BBCPHVtWNiKAkD6DRTBGicayZgQQjxlaFt5BoKqUkMuObGJPKwKIx4os64YlEE1OSCVsqnAwIwhttps://kakaomames.github.io/turbowarp/D9mA6Lk1zUVXAAAAAElFTkSuQmCC";

 https://kakaomames.github.io/turbowarp/**
   * @param {VM.Target|null} target
   * @param {string|unknown} thing
   * @returns {string|number|boolean}
   https://kakaomames.github.io/turbowarp/
  const getThingOfTarget = (target, thing) => {
    if (!target) {
      return "";
    }
    if (thing === "x position") {
      return target.x;
    }
    if (thing === "y position") {
      return target.y;
    }
    if (thing === "direction") {
      return target.direction;
    }
    if (thing === "costume num") {
      return target.currentCostume + 1;
    }
    if (thing === "costume name") {
      return target.getCostumes()[target.currentCostume].name;
    }
    if (thing === "size") {
      return target.size;
    }
    if (thing === "volume") {
      return target.volume;
    }
   https://kakaomames.github.io/turbowarp// this should never happen
    return "";
  };

  class ClonesPlus {
    getInfo() {
      return {
        id: "lmsclonesplus",
        name: Scratch.translate("Clones+"),
        color1: "#FFAB19",
        color2: "#EC9C13",
        color3: "#CF8B17",
        menuIconURI: menuIconURI,
        blocks: [
          {
            opcode: "whenCloneStartsWithVar",
            blockType: Scratch.BlockType.HAT,
            text: Scratch.translate(
              "when I start as a clone with [INPUTA] set to [INPUTB]"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "createCloneOfMyselfWithVar",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "create clone of myself with [INPUTA] set to [INPUTB]"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "createCloneWithVar",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "create clone of original with [INPUTA] set to [INPUTB]"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },

          "---",

          {
            opcode: "touchingCloneWithVar",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate(
              "touching clone with [INPUTA] set to [INPUTB]?"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "touchingMainSprite",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("touching main sprite?"),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
            extensions: ["colours_control"],
          },

          "---",

          {
            opcode: "setVariableOfClone",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "set variable [INPUTA] to [INPUTB] for clones with [INPUTC] set to [INPUTD]"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "0",
              },
              INPUTC: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTD: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "getVariableOfClone",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "variable [INPUTA] of clone with [INPUTB] set to [INPUTC]"
            ),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTC: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "setVariableOfMainSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "set variable [INPUTA] to [INPUTB] for main sprite"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "getVariableOfMainSprite",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("variable [INPUT] of main sprite"),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
            },
            extensions: ["colours_control"],
          },

          "---",

          {
            opcode: "cloneExists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate(
              "clone with [INPUTA] set to [INPUTB] exists?"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "getThingOfClone",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "[INPUTA] of clone with [INPUTB] set to [INPUTC]"
            ),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "thingOfMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTC: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "getThingOfMainSprite",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[INPUT] of main sprite"),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                menu: "thingOfMenu",
              },
            },
            extensions: ["colours_control"],
          },

          "---",

          {
            opcode: "stopScriptsInSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("stop scripts in [INPUT]"),
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                menu: "spriteMenu",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "stopScriptsInClone",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "stop scripts in clones with [INPUTA] set to [INPUTB]"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "stopScriptsInMainSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("stop scripts in main sprite"),
            filter: [Scratch.TargetType.SPRITE],
            extensions: ["colours_control"],
          },

          "---",

          {
            opcode: "deleteClonesInSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("delete clones in [INPUT]"),
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                menu: "spriteMenu",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "deleteCloneWithVar",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "delete clones with [INPUTA] set to [INPUTB]"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },

          "---",

          {
            opcode: "isClone",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is clone?"),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
            extensions: ["colours_control"],
          },

          "---",

          {
            opcode: "cloneCount",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("clone count"),
            extensions: ["colours_control"],
          },
          {
            opcode: "spriteCloneCount",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("clone count of [INPUT]"),
            disableMonitor: true,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                menu: "spriteMenu",
              },
            },
            extensions: ["colours_control"],
          },
        ],
        menus: {
          spriteMenu: {
            acceptReporters: true,
            items: "getSprites",
          },
         https://kakaomames.github.io/turbowarp// menus use acceptReporters: false for Scratch parity
          variablesMenu: {
            acceptReporters: false,
            items: "getVariables",
          },
          thingOfMenu: {
            acceptReporters: false,
            items: [
              {
                text: Scratch.translate("x position"),
                value: "x position",
              },
              {
                text: Scratch.translate("y position"),
                value: "y position",
              },
              {
                text: Scratch.translate("direction"),
                value: "direction",
              },
              {
                text: Scratch.translate("costume #"),
                value: "costume num",
              },
              {
                text: Scratch.translate("costume name"),
                value: "costume name",
              },
              {
                text: Scratch.translate("size"),
                value: "size",
              },
              {
                text: Scratch.translate("volume"),
                value: "volume",
              },
            ],
          },
        },
      };
    }

    whenCloneStartsWithVar(args, util) {
     https://kakaomames.github.io/turbowarp// TODO: this is really not ideal. this should be an event-based hat ideally, but we don't have a good
     https://kakaomames.github.io/turbowarp// way to do that right now...
      if (util.target.isOriginal) {
        return false;
      }
      const variable = util.target.lookupVariableById(args.INPUTA);
      const expectedValue = args.INPUTB;
      if (variable) {
        return Scratch.Cast.compare(variable.value, expectedValue) === 0;
      }
      return false;
    }

    createCloneOfMyselfWithVar(args, util) {
     https://kakaomames.github.io/turbowarp// @ts-expect-error - not typed yet
      Scratch.vm.runtime.ext_scratch3_control._createClone(
        "_myself_",
        util.target
      );
      const clones = util.target.sprite.clones;
      const cloneNum = clones.length - 1;
      const cloneVariable = clones[cloneNum].lookupVariableById(args.INPUTA);
      if (cloneVariable) {
        cloneVariable.value = args.INPUTB;
      }
    }

    createCloneWithVar(args, util) {
     https://kakaomames.github.io/turbowarp// @ts-expect-error - not typed yet
      Scratch.vm.runtime.ext_scratch3_control._createClone(
        util.target.sprite.name,
        util.target
      );
      const clones = util.target.sprite.clones;
      const cloneNum = clones.length - 1;
      const cloneVariable = clones[cloneNum].lookupVariableById(args.INPUTA);
      if (cloneVariable) {
        cloneVariable.value = args.INPUTB;
      }
    }

    touchingCloneWithVar(args, util) {
      const drawableCandidates = util.target.sprite.clones
        .filter((clone) => {
          const variable = clone.lookupVariableById(args.INPUTA);
          return (
            variable && Scratch.Cast.compare(variable.value, args.INPUTB) === 0
          );
        })
        .map((clone) => clone.drawableID);
      if (drawableCandidates.length === 0) {
        return false;
      }
      return Scratch.vm.renderer.isTouchingDrawables(
        util.target.drawableID,
        drawableCandidates
      );
    }

    touchingMainSprite(args, util) {
      if (util.target.isOriginal) {
        return false;
      }
      const main = util.target.sprite.clones[0];
      const drawableCandidates = [main.drawableID];
      return Scratch.vm.renderer.isTouchingDrawables(
        util.target.drawableID,
        drawableCandidates
      );
    }

    setVariableOfClone(args, util) {
      const newVariableValue = args.INPUTB;
      const expectedVarValue = args.INPUTD;
      const clones = util.target.sprite.clones;
      for (let index = 1; index < clones.length; index++) {
        const checkVar = clones[index].lookupVariableById(args.INPUTC);
        if (
          checkVar &&
          Scratch.Cast.compare(checkVar.value, expectedVarValue) === 0
        ) {
          const editVar = clones[index].lookupVariableById(args.INPUTA);
          if (editVar) {
            editVar.value = newVariableValue;
          }
        }
      }
    }

    getVariableOfClone(args, util) {
      const clone = this.getCloneFromVariable(
        args.INPUTB,
        args.INPUTC,
        util.target.sprite.clones
      );
      if (!clone) {
        return "";
      }
     https://kakaomames.github.io/turbowarp// guaranteed to exist by getCloneFromVariable
      const cloneVar = clone.lookupVariableById(args.INPUTA);
      return cloneVar.value;
    }

    setVariableOfMainSprite(args, util) {
      const main = util.target.sprite.clones[0];
      const variableObj = main.lookupVariableById(args.INPUTA);
      if (variableObj) {
        variableObj.value = args.INPUTB;
      }
    }

    getVariableOfMainSprite(args, util) {
      const main = util.target.sprite.clones[0];
      const variableObj = main.lookupVariableById(args.INPUT);
      if (variableObj) {
        return variableObj.value;
      }
      return "";
    }

    cloneExists(args, util) {
      const clone = this.getCloneFromVariable(
        args.INPUTA,
        args.INPUTB,
        util.target.sprite.clones
      );
      return !!clone;
    }

    getThingOfClone(args, util) {
      const clone = this.getCloneFromVariable(
        args.INPUTB,
        args.INPUTC,
        util.target.sprite.clones
      );
      return getThingOfTarget(clone, args.INPUTA);
    }

    getThingOfMainSprite(args, util) {
      const main = util.target.sprite.clones[0];
      return getThingOfTarget(main, args.INPUT);
    }

    stopScriptsInSprite(args) {
      const targetObj = Scratch.vm.runtime.getSpriteTargetByName(args.INPUT);
      if (targetObj) {
        Scratch.vm.runtime.stopForTarget(targetObj);
      }
    }

    stopScriptsInMainSprite(args, util) {
      Scratch.vm.runtime.stopForTarget(util.target.sprite.clones[0]);
    }

    stopScriptsInClone(args, util) {
      const clones = util.target.sprite.clones;
      let expectedValue = args.INPUTB;
      for (let index = 1; index < clones.length; index++) {
        const cloneVariable = clones[index].lookupVariableById(args.INPUTA);
        if (
          cloneVariable &&
          Scratch.Cast.compare(cloneVariable.value, expectedValue) === 0
        ) {
          Scratch.vm.runtime.stopForTarget(clones[index]);
        }
      }
    }

    deleteClonesInSprite(args, util) {
      const target = Scratch.vm.runtime.getSpriteTargetByName(args.INPUT);
      if (!target) {
        return;
      }
      const clones = target.sprite.clones;
      for (let index = clones.length - 1; index > 0; index--) {
        Scratch.vm.runtime.disposeTarget(clones[index]);
      }
    }

    deleteCloneWithVar(args, util) {
      const clones = util.target.sprite.clones;
      const expectedValue = args.INPUTB;
      for (let index = clones.length - 1; index > 0; index--) {
        const cloneVar = clones[index].lookupVariableById(args.INPUTA);
        if (
          cloneVar &&
          Scratch.Cast.compare(cloneVar.value, expectedValue) === 0
        ) {
          Scratch.vm.runtime.disposeTarget(clones[index]);
        }
      }
    }

    isClone(args, util) {
      return !util.target.isOriginal;
    }

    cloneCount(args, util) {
      return Scratch.vm.runtime._cloneCounter;
    }

    spriteCloneCount(args, util) {
      const target = Scratch.vm.runtime.getSpriteTargetByName(args.INPUT);
      if (target) {
        return target.sprite.clones.length - 1;
      }
      return 0;
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {string} variableId
     * @param {unknown} expectedValue
     * @param {VM.Target[]} clones
     * @returns {VM.Target|null}
     https://kakaomames.github.io/turbowarp/
    getCloneFromVariable(variableId, expectedValue, clones) {
      for (let index = 1; index < clones.length; index++) {
        const cloneVar = clones[index].lookupVariableById(variableId);
        if (
          cloneVar &&
          Scratch.Cast.compare(cloneVar.value, expectedValue) === 0
        ) {
          return clones[index];
        }
      }
      return null;
    }

    getSprites() {
      let spriteNames = [];
      const targets = Scratch.vm.runtime.targets;
      const editingTarget = Scratch.vm.runtime.getEditingTarget();
      for (let index = 1; index < targets.length; index++) {
        const curTarget = targets[index];
        let display = curTarget.getName();
        if (editingTarget === curTarget) {
          display = Scratch.translate({
            default: "myself",
            description: "Item in a dropdown that refers to the current sprite",
          });
        }
        if (targets[index].isOriginal) {
          const jsonOBJ = {
            text: display,
            value: curTarget.getName(),
          };
          spriteNames.push(jsonOBJ);
        }
      }
      if (spriteNames.length > 0) {
        return spriteNames;
      } else {
        return [{ text: "", value: 0 }];https://kakaomames.github.io/turbowarp//this should never happen but it's a failsafe
      }
    }

    getSpriteObj(name) {
     https://kakaomames.github.io/turbowarp//This is unused but I'm leaving it in for potential future blocks
      const spriteObj = Scratch.vm.runtime.getSpriteTargetByName(name);
      return JSON.stringify(spriteObj);
    }

    getVariables() {
      const variables =
        typeof Blockly === "undefined"
          ? []
          : Blockly.getMainWorkspace()
              .getVariableMap()
              .getVariablesOfType("")
              .filter((model) => model.isLocal)
              .map((model) => ({
                text: model.name,
                value: model.getId(),
              }));
      if (variables.length > 0) {
        return variables;
      } else {
        return [{ text: "", value: "" }];
      }
    }
  }
  Scratch.extensions.register(new ClonesPlus());
})(Scratch);

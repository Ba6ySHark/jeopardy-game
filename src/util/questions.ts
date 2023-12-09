const data: any =  {
    "1": {
        "name": "General",
        "questions": {
            "100": {
                "text": "The name of a malware that hides inside a seemingly legitimate program",
                "answers": {
                    "1": "Ambush",
                    "2": "Disguise virus",
                    "3": "Trojan",
                    "4": "Hide-and-seek"
                },
                "correct": "Trojan"
            },
            "200": {
                "text": "SSL/TLS are one of many protocol at various layers. Which layer does SSL/TLS operate at?",
                "answers": {
                    "1": "Physical Layer",
                    "2": "Data Link Layer",
                    "3": "Application Layer",
                    "4": "Transport Layer"
                },
                "correct": "Transport Layer"
            },
            "300": {
                "text": "Password salting is a common second layer of protection on passwords, what attack does it make the most difficult?",
                "answers": {
                    "1": "Hacking attempts",
                    "2": "Guessing attacks",
                    "3": "DDOS attacks",
                    "4": "Keylogger attacks"
                },
                "correct": "Guessing attacks"
            },
            "400": {
                "text": "Attacks that ask for a direct payment to be disabled:",
                "answers": {
                    "1": "Supply chain attack",
                    "2": "Worm",
                    "3": "Cryptojacking",
                    "4": "Ransomware"
                },
                "correct": "Ransomware"
            },
            "500": {
                "text": "What type of attack does MAC prevent?",
                "answers": {
                    "1": "MITM",
                    "2": "Ransomware",
                    "3": "Guessing Attack",
                    "4": "Worm"
                },
                "correct": "MITM"
            }
        }
    },
    "2": {
        "name": "Protection",
        "questions": {
            "100": {
                "text": "The most common way to protect online information, mandatory on almost all account based sites:",
                "answers": {
                    "1": "Password",
                    "2": "Two factor authentication",
                    "3": "E-mail synching",
                    "4": "Black magic"
                },
                "correct": "Password"
            },
            "200": {
                "text": "A common way for websites to show their authenticity using third party:",
                "answers": {
                    "1": "Authorities",
                    "2": "Signature",
                    "3": "Certificates",
                    "4": "Guarantee"
                },
                "correct": "Certificates"
            },
            "300": {
                "text": "TLS (Transport Layer Security) has all of the following features but…",
                "answers": {
                    "1": "Symmetric-key encryption",
                    "2": "GCM or MAC",
                    "3": "Hashing salt",
                    "4": "Certificates"
                },
                "correct": "Hashing salt"
            },
            "400": {
                "text": "A way to ensure message integrity by adding additional information:",
                "answers": {
                    "1": "MII(Message Integrity Insurance)",
                    "2": "MAC(Message Authentication Code)",
                    "3": "MS (message safeguarding)",
                    "4": "MCC (message certification code)"
                },
                "correct": "MAC(Message Authentication Code)"
            },
            "500": {
                "text": "HTTP is a common acronym that stands for:",
                "answers": {
                    "1": "Hypertext transmission protocol",
                    "2": "Hypertext transfer policy",
                    "3": "Hypertext transmission policy",
                    "4": "Hypertext transfer protocol"
                },
                "correct": "Hypertext transfer protocol"
            }
        }
    },
    "3": {
        "name": "Encodement",
        "questions": {
            "100": {
                "text": "A common representation of bytes rather than binary, these range from 0-f",
                "answers": {
                    "1": "Binary",
                    "2": "Decimal",
                    "3": "Octal",
                    "4": "Hexadecimal"
                },
                "correct": "Hexadecimal"
            },
            "200": {
                "text": "0o is a prefix for a nuber system with base:",
                "answers": {
                    "1": "2",
                    "2": "4",
                    "3": "8",
                    "4": "16"
                },
                "correct": "8"
            },
            "300": {
                "text": "What is the hexadecimal representation of 0b10111010?",
                "answers": {
                    "1": "0xAB",
                    "2": "0xBA",
                    "3": "0xBC",
                    "4": "0xDC"
                },
                "correct": "0xBA"
            },
            "400": {
                "text": "Different systems of data representation have different bases, pick the correct one",
                "answers": {
                    "1": "Binary base 1",
                    "2": "Binary base 2",
                    "3": "Hexadecimal base 6",
                    "4": "Octal base 18"
                },
                "correct": "Binary base 2"
            },
            "500": {
                "text": "On UNIX authorities for a file can be given and taken away using numbers from what system of data representation?",
                "answers": {
                    "1": "Binary",
                    "2": "Octal",
                    "3": "Decimal",
                    "4": "Hexadecimal"
                },
                "correct": "Octal"
            }
        }
    },
    "4": {
        "name": "Encryption",
        "questions": {
            "100": {
                "text": "The cipher based on moving each letter of plaintext a fixed number of letters down the alphabet is called:",
                "answers": {
                    "1": "Caesar cipher",
                    "2": "Vigenere cipher",
                    "3": "RSA",
                    "4": "Pigpen cipher"
                },
                "correct": "Caesar cipher"
            },
            "200": {
                "text": "An algorithm used to encrypt a non fixed size of data to a fixed size of jumbled characters is called:",
                "answers": {
                    "1": "Adding",
                    "2": "Condensing",
                    "3": "Hashing",
                    "4": "Modulus"
                },
                "correct": "Hashing"
            },
            "300": {
                "text": "The most commonly used hashing algorithm is:",
                "answers": {
                    "1": "MD5",
                    "2": "SHA-256",
                    "3": "SHA-512",
                    "4": "SHA-224"
                },
                "correct": "SHA-256"
            },
            "400": {
                "text": "The main characteristic of asymmetric keys is:",
                "answers": {
                    "1": "Different keys for decryption and encryption",
                    "2": "Same keys for decryption and encryption",
                    "3": "Different encryption algorithms",
                    "4": "Same encryption algorithms"
                },
                "correct": "Different keys for decryption and encryption"
            },
            "500": {
                "text": "Two things needed to reverse a hash are:",
                "answers": {
                    "1": "Key, length of message",
                    "2": "Key & hashing algorithm",
                    "3": "Hashing algorithm & message length",
                    "4": "Key and original message"
                },
                "correct": "Key, length of message"
            }
        }
    },
    "5": {
        "name": "Viruses",
        "questions": {
            "100": {
                "text": "The creator of the first ever worm is:",
                "answers": {
                    "1": "Jesus Christ",
                    "2": "Linus Torvalds",
                    "3": "Bill Gates",
                    "4": "Bob Thomas"
                },
                "correct": "Bob Thomas"
            },
            "200": {
                "text": "The name of the virus famously spread through emails via love confessions:",
                "answers": {
                    "1": "Love letter virus",
                    "2": "ILOVEYOU",
                    "3": "Notebook",
                    "4": "Nicolas Sparks"
                },
                "correct": "ILOVEYOU"
            },
            "300": {
                "text": "The virus that caused the first felony conviction under the Computer Fraud and Abuse Act:",
                "answers": {
                    "1": "Morris worm",
                    "2": "Stuxnet",
                    "3": "Creeper",
                    "4": "Zombie"
                },
                "correct": "Morris worm"
            },
            "400": {
                "text": "Although neither country has admitted responsibility, Stuxnet was theoretically created to sabotage the Iranian government by the government of:",
                "answers": {
                    "1": "USA and Afghanistan",
                    "2": "Afghanistan and Israel",
                    "3": "USA and Israel",
                    "4": "Afghanistan and Palestine"
                },
                "correct": "USA and Israel"
            },
            "500": {
                "text": "The virus with the most cost in damages:",
                "answers": {
                    "1": "Sobig",
                    "2": "Mydoom",
                    "3": "ILOVEYOU",
                    "4": "Klez"
                },
                "correct": "Mydoom"
            }
        }
    }
}

export default data;
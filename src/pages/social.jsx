import React, { useEffect, useRef, useState } from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Button,
    Views,
    View,
    Icon,
    Card,
    Sheet,
    PageContent,
    Popup,
    Popover,
    ListInput,
    f7
} from 'framework7-react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import CommonNavbar from '../components/CommonNavbar';
import PageTransition from '../components/PageTransition';

const SocialPage = () => {
    const { t } = useTranslation();
    const [sheetOpenedSuccess, setSheetOpenedSuccess] = useState(false);
    const [sheetOpenedEdit, setSheetOpenedEdit] = useState(false);
    const [sheetOpenComment, setSheetOpenComment] = useState(false);
    const [sheetOpenedDeleteSocial, setSheetOpenedDeleteSocial] = useState(false);
    const [sheetOpenedAdd, setSheetOpenedAdd] = useState(false);

    // const [images, setImages] = useState([]);

    // const [addimage, setaddimage] = useState([]);
    // const handleImageChange = (event) => {
    //     const files = Array.from(event.target.files); // Lấy danh sách file
    //     setaddimage((prevImages) => [...prevImages, ...files]);
    //     console.log(files);
    //     const newImages = [];
    //     files.forEach((file) => {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             newImages.push(e.target.result);
    //             if (newImages.length === files.length) {
    //                 setImages((prev) => [...prev, ...newImages]); // Cập nhật state

    //             }
    //         };
    //         reader.readAsDataURL(file);
    //     });
    // };

    // const triggerFileInput = () => {
    //     document.getElementById("fileInput").click();
    // };

    // const handleDeleteImage = (index) => {
    //     setImages(images.filter((_, i) => i !== index));

    //     setaddimage(addimage.filter((_, i) => i !== index));

    // };

    // test

    const [media, setMedia] = useState([]); // [{ preview, file, type }]

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const newMedia = [];

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const type = file.type.startsWith("video") ? "video" : "image";
                newMedia.push({
                    preview: e.target.result,
                    file,
                    type,
                });

                if (newMedia.length === files.length) {
                    setMedia((prev) => [...prev, ...newMedia]);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const triggerFileInput = () => {
        document.getElementById("fileInput").click();
    };

    const handleDeleteMedia = (index) => {
        setMedia((prev) => prev.filter((_, i) => i !== index));
    };

    //upload audio

    const [audioFile, setAudioFile] = useState(null);
    const [audioadd, setAudioAdd] = useState("");
    const handleAudioChange = (event) => {
        const file = event.target.files[0]; // Lấy file đầu tiên
        setAudioAdd(file)
        if (file && file.type.startsWith("audio/")) {
            setAudioFile(URL.createObjectURL(file)); // Tạo URL để phát file
        } else {
            alert("Vui lòng chọn một tệp âm thanh hợp lệ!");
        }
    };

    const handleDeleteAudio = () => {
        setAudioFile(null); // Xóa file đã chọn
        setAudioAdd("")
    };

    const triggerFileInputAudio = () => {
        document.getElementById("audioInput").click();
    };

    const uid_account = localStorage.getItem("ELLM-uid");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const token = localStorage.getItem("ELLM-token");
    const language = localStorage.getItem("ELLM_language");
    const [socials, setSocials] = useState([]);
    useEffect(() => {
        const name = localStorage.getItem("ELLM-name");
        const email = localStorage.getItem("ELLM-email");
        const avatar = localStorage.getItem("ELLM-avatar");
        { name && setName(name) }
        { email && setEmail(email) }
        { avatar && setAvatar(avatar) }
        getSocials();


    }, [])
    function getSocials() {
        const data = {
            "token": token,
            "lang": language
        }

        const api = axios.create({
            baseURL: "https://beta.ellm.io/api",
        });
        api.post("/socials", data, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer 123123ellm',
            },
        }).then((res) => {
            if (res.data.status === "error") {
                console.log('lỗi');
                f7.dialog.alert(res.data.content, 'Error');

            } else if (res.data.status === "success") {
                console.log(res.data.data);
                setSocials(res.data.data)

            }
        })
            .catch((error) => {
                f7.dialog.alert(res.data.content, 'Error');
                console.log("k ket noi dc api");

            });
    }
    const [selectedContent, setSelectedContent] = useState("");
    const [sheetOpenedDetailImage, setSheetOpenedDetailImage] = useState(false);

    const [selectImage, setSelectImage] = useState("");

    const handleClick = (content, index) => {
        setSelectedContent(content, index);
        setSelectImage(index)
        console.log("Nội dung đã chọn:", index);
        social_id(content.active);
        setSheetOpenedDetailImage(true);
    };

    const [selectTypePost, setSelectTypePost] = useState("");

    //Kết nối websocket
    const ws = useRef(null);
    const [connectionOpen, setConnectionOpen] = useState(false);

    useEffect(() => {
        const id_device = (localStorage.getItem("ELLM-id-device") || "default-protocol").trim();
        // Kết nối WebSocket không có tham số trên URL
        ws.current = new WebSocket("wss://wsa.ellm.io/", id_device);
        ws.current.onopen = () => {
            console.log("Connection Opened", id_device);
            setConnectionOpen(true);
        };
        ws.current.binaryType = "arraybuffer";
        ws.current.onmessage = async (event) => {
            if (event.data instanceof ArrayBuffer) {
                const text = await event.data;
                var string = new TextDecoder().decode(text);
                var decrypted = encrypt(string, 'd');
                // var decrypted = JSON.parse(decrypted.replace(/^[^{]+/, ""));
                if (isObject(decrypted)) {
                    decrypted = decrypted;
                }
                else if (isJson(decrypted)) {
                    decrypted = JSON.parse(decrypted);
                }
                else {
                    var decrypted = decrypted.replace(/\\/g, "");
                    if (isJson(decrypted)) {
                        decrypted = JSON.parse(decrypted);
                    }
                }
                var datas = decrypted;
                console.log(datas);
                if (datas.router == 'ping') {
                    console.log(datas);
                } else if (JSON.parse(datas).status == "success") {
                    console.log("du lieu socket tra ve", JSON.parse(datas));
                    if (JSON.parse(datas).router == "social-like") {

                        setSocials(prev =>
                            prev.map(social => {
                                if (social.active === JSON.parse(datas).data.social) {
                                    const isLiked = JSON.parse(datas).data.like === 1;
                                    const newLikeCount = isLiked ? social.like + 1 : social.like - 1;
                                    setAcc_like_social(JSON.parse(datas).data.like)
                                    return {
                                        ...social,
                                        accountlike: JSON.parse(datas).data.like,
                                        like: Math.max(newLikeCount, 0), // để tránh số âm
                                    };
                                }
                                return social;
                            })
                        );
                    } else {
                        setListComment(prevMessage => [...prevMessage, JSON.parse(datas).data]);
                        setContent("");
                        setSocials(prev =>
                            prev.map(social => {
                                if (social.active === JSON.parse(datas).data.social) {
                                    const newCommentCount = social.comment + 1;
                                    return {
                                        ...social,
                                        comment: Math.max(newCommentCount, 0), // để tránh số âm
                                    };
                                }
                                return social;
                            })
                        );


                    }

                }

            } else {
                console.log("Received non-Blob message:", event.data);
            }
        };
        ws.current.onerror = (error) => {
            console.error("WebSocket Error", error);
        };
        ws.current.onclose = (event) => {
            console.log("Connection Closed", event.code, event.reason);
            setConnectionOpen(false);
        };
        return () => {
            console.log("Cleaning up...");
            if (ws.current && ws.current.readyState === WebSocket.OPEN) {
                ws.current.close();
            }
        };
    }, []);

    function encrypt(getdata, type) {
        try {
            const { SHA256, enc, AES } = CryptoJS;

            const secret_iv = type === 'e' ? makeid(16) : getdata.substring(0, 16);
            const active = localStorage.getItem("ELLM-id-device") || "default-secret-key";

            const encryptedText = getdata.slice(16);

            // 🛠 Fix lỗi enc.Hex → enc.Utf8
            const key = SHA256(active).toString(enc.Hex).substring(0, 32);
            const iv = SHA256(secret_iv).toString(enc.Hex).substring(0, 16);


            let crypted;

            if (type === 'e') {
                crypted = secret_iv + AES.encrypt(getdata, enc.Utf8.parse(key), { iv: enc.Utf8.parse(iv) }).toString();
            } else {
                if (!encryptedText || encryptedText.length < 1) {
                    console.error("❌ Dữ liệu mã hóa không hợp lệ.");
                    return null;
                }

                crypted = AES.decrypt(encryptedText, enc.Utf8.parse(key), { iv: enc.Utf8.parse(iv) }).toString(enc.Utf8);
                // console.log("decrypt", crypted)
                if (!crypted) {
                    console.error("❌ Giải mã thất bại.");
                    return null;
                }
            }
            return crypted;
        } catch (error) {
            console.error("❌ Encryption/Decryption error:", error);
            return null;
        }
    }

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function uintToString(uintArray) {
        var encodedString = String.fromCharCode.apply(null, uintArray);
        return decodeURIComponent(escape(atob(encodedString)));
    }
    function ArrayBufferToString(buffer) {
        return BinaryToString(String.fromCharCode.apply(null, new Uint8Array(buffer)));
    }
    function StringToArrayBuffer(string) {
        return new Uint8Array(StringToUint8Array(string)).buffer;
    }
    function BinaryToString(binary) {
        try {
            return decodeURIComponent(escape(binary));
        } catch (error) {
            if (error instanceof URIError) {
                return binary;
            } else {
                throw error;
            }
        }
    }
    function StringToBinary(string) {
        var chars = [];
        for (var i = 0; i < string.length; i++) {
            chars.push(string.charCodeAt(i) & 0xFF);
        }
        return String.fromCharCode.apply(null, new Uint8Array(chars));
    }
    function StringToUint8Array(string) {
        var chars = [];
        for (var i = 0; i < string.length; i++) {
            chars.push(string.charCodeAt(i));
        }
        return new Uint8Array(chars);
    }
    function isObject(value) {
        return value && typeof value === "object" && value.constructor === Object;
    }

    function isJson(str) {
        try {
            JSON.parse(str);
            return true;
        } catch (e) {
            return false;
        }
    }
    //Like

    function LikeSocial(active, like) {
        var id_device = localStorage.getItem("ELLM-id-device");
        var token = localStorage.getItem("ELLM-token");

        console.log("nhận onclick", active, like)
        if (ws.current) {

            const a = {
                "content": "like",
                "like": like,
                "social": active,
            }

            const data = {
                "code": "send",
                // "message": active,
                "router": "social-like",
                "sender": id_device, //cần lấy id thiết bị
                "token": token,
                "data": a,
                "stream": "true"
            }

            console.log("data send", data);
            // setMessage((_message) => [..._message, data]);
            var encrypted = encrypt(JSON.stringify(data), 'e');
            console.log('Send Socket', encrypted);
            ws.current.send(StringToArrayBuffer(encrypted));


        }
    }
    const [social_view, setSocial_view] = useState("");
    const [acc_social_view, setacc_social_view] = useState("");
    const [data_social_view, setdata_social_view] = useState([]);
    const [acc_like_social, setAcc_like_social] = useState();

    const [contentUpdate, setContentUpdate] = useState("");
    const [accessUpdate, setAccessUpdate] = useState();
    const [typeUpdate, setTypeUpdate] = useState("");
    const [audioUpdate, setAudioUpdate] = useState("");
    const [imageUpdate, setImageUpdate] = useState([]);
    function social_id(e) {
        console.log(e);
        localStorage.setItem("ELLM_social_view", e)
        const data = {
            "token": token,
            "active": e
        }

        const api = axios.create({
            baseURL: "https://beta.ellm.io/api",
        });
        api.post("/social-view", data, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer 123123ellm',
            },
        }).then((res) => {
            if (res.data.status === "error") {
                console.log('lỗi');
                f7.dialog.alert(res.data.content, 'Error');

            } else if (res.data.status === "success") {
                console.log(123, res.data.data.acc);

                setComment(res.data.data.acc.comment)
                setacc_social_view(res.data.data.acc)
                setdata_social_view(res.data.data.selectData)
                setSocial_view(res.data.data.social)
                setListComment(res.data.comment)
                setAcc_like_social(res.data.accountlike)
                console.log("content", res.data.data.social.content);
                //dùng để chỉnh sửa
                setContentUpdate(res.data.data.social.content);
                setAccessUpdate(res.data.data.social.access);
                setTypeUpdate(res.data.data.social.type)

                if (res.data.data.social.type == 'images') {
                    setImageUpdate(res.data.data.selectData)
                    console.log(res.data.data.selectData);
                }
                if (res.data.data.social.type == 'audio') {
                    setAudioUpdate(res.data.data.selectData[0])
                    console.log(res.data.data.selectData);
                }



            }
        })
            .catch((error) => {
                console.log("k ket noi dc api");

            });
    }
    //Comment
    const [content, setContent] = useState("");
    const [comment, setComment] = useState();

    const [listComment, setListComment] = useState([]);
    function CommentSocial() {
        var id_device = localStorage.getItem("ELLM-id-device");
        var token = localStorage.getItem("ELLM-token");

        var active_social = localStorage.getItem("ELLM_social_view");

        if (ws.current && content) {

            const a = {
                "content": content,
                "comment": comment ? comment : 0,
                "social": active_social,
                "date": "Just Now",
            }

            const data = {
                "code": "send",
                // "message": active,
                "router": "social-comments",
                "sender": id_device, //cần lấy id thiết bị
                "token": token,
                "data": a,
                "stream": "true"
            }

            console.log("data send", data);
            // setMessage((_message) => [..._message, data]);
            var encrypted = encrypt(JSON.stringify(data), 'e');
            console.log('Send Socket', encrypted);
            ws.current.send(StringToArrayBuffer(encrypted));
        }
    }

    //delete comment
    function deleteComment(e) {
        console.log(e);
        const data = {
            "token": token,
            "active": e
        }

        const api = axios.create({
            baseURL: "https://beta.ellm.io/api",
        });
        api.post("/social-deletecomment", data, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer 123123ellm',
            },
        }).then((res) => {
            if (res.data.status === "error") {
                console.log('lỗi');
                f7.dialog.alert(res.data.content, 'Error');

            } else if (res.data.status === "success") {
                console.log(123, res.data);
                f7.dialog.alert(res.data.content, 'Success', () => {
                    setListComment(prev =>
                        prev.filter(comment => comment.active !== e)
                    );

                });
            }
        })
            .catch((error) => {
                f7.dialog.alert(res.data.content, 'Error');
                console.log("k ket noi dc api");

            });

    }

    function profile_social(e) {
        localStorage.setItem("ELLM_social_profile", e);
        f7.views.main.router.navigate('/profile/');
    }

    const [contentAdd, setContentAdd] = useState("");
    const [access, setAccess] = useState("");
    const [type, setType] = useState("");

    // Add new post
    function handleAddPost() {
        var token = localStorage.getItem("ELLM-token");


        let formData = new FormData();
        formData.append("token", token);
        formData.append("content", contentAdd);
        formData.append("access", access);
        formData.append("type", type);

        formData.append("voice", audioadd);
        if (addimage.length > 0) {
            addimage.forEach((file) => {
                formData.append("images[]", file); // Đảm bảo gửi từng file riêng lẻ
            });

        }
        for (let pair of formData.entries()) {
            console.log(pair[0], pair[1].name); // In tên file để kiểm tra
        }

        const api = axios.create({
            baseURL: "https://beta.ellm.io/api",
        });

        api.post("/social-add", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': 'Bearer 123123ellm',
            },
        }).then((res) => {
            if (res.data.status === "error") {
                console.log('lỗi');
                console.log(res.data.content);
                f7.dialog.alert(res.data.content, 'Error');

            } else if (res.data.status === "success") {
                console.log(res.data);
                f7.dialog.alert(res.data.content, 'Success', () => {
                    f7.sheet.close();
                    setContentAdd("");
                    setImages([]);
                    setaddimage([]);
                    setAudioAdd("")
                    getSocials();
                }
                )
            }
        })
            .catch((error) => {
                f7.dialog.alert(res.data.content, 'Error');
                console.log("k ket noi dc api:", error);
            });
    }

    const [selectActive, setSelectActive] = useState("");
    const [selectuidSocial, setSelectuidSocial] = useState("");
    const [selectSaveSocial, setSelectSaveSocial] = useState(0);
    const getActive = (active, uid, save) => {
        setSelectActive(active);
        console.log("active", active);
        setSelectuidSocial(uid);
        setSelectSaveSocial(save);
        localStorage.getItem("ELLM_active_social", active)
    }
    //Xóa social
    function DeleteSocial() {
        const data = {
            "token": token,
            "active": selectActive
        }
        const api = axios.create({
            baseURL: "https://beta.ellm.io/api",
        });
        api.post("/social-delete", data, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer 123123ellm',
            },
        }).then((res) => {
            if (res.data.status === "error") {
                console.log('lỗi');
                f7.dialog.alert(res.data.content, 'Error');
            } else if (res.data.status === "success") {
                f7.dialog.alert(res.data.content, 'Success', () => {
                    f7.sheet.close();
                    getSocials();
                });
            }
        })
            .catch((error) => {
                f7.dialog.alert(res.data.content, 'Error');
                console.log("k ket noi dc api");
            });
    }

    //Update Social
    const handleImageChangeUpdate = (e) => {
        const files = Array.from(e.target.files);
        console.log("hình được chọn", files);

        const newImages = [];
        let loadedCount = 0;

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                newImages.push({
                    file: file,
                    preview: event.target.result, // base64
                    id: ""
                });

                loadedCount++;
                if (loadedCount === files.length) {
                    setImageUpdate((prev) => [...prev, ...newImages]);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const handleDeleteImageUpdate = (indexToRemove) => {
        setImageUpdate((prev) =>
            prev.filter((_, index) => index !== indexToRemove)
        );
    };

    const triggerFileInputUpdate = () => {
        document.getElementById("fileInputUpdate").click();
    };

    const [audioFileUpdate, setAudioFileUpdate] = useState(null);
    const handleAudioChangeUpdate = (event) => {
        const file = event.target.files[0]; // Lấy file đầu tiên
        console.log(file);

        setAudioFileUpdate(file)
        if (file && file.type.startsWith("audio/")) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const base64Audio = e.target.result;

                const audioObj = {
                    file: file,
                    preview: base64Audio, // base64 để phát
                    id: "" // âm thanh mới chưa có id
                };

                setAudioUpdate(audioObj);
            };

            reader.readAsDataURL(file); // Đọc thành base64
        } else {
            alert("Vui lòng chọn một tệp âm thanh hợp lệ!");
        }
    };

    const handleDeleteAudioUpdate = () => {
        setAudioFileUpdate(""); // Xóa file đã chọn
        setAudioUpdate("")
    };

    const triggerFileInputAudioUpdate = () => {
        document.getElementById("audioInput").click();
    };

    function updateSocial() {
        console.log(imageUpdate);
        var token = localStorage.getItem("ELLM-token");


        let formData = new FormData();
        formData.append("token", token);
        formData.append("active", selectActive);
        formData.append("content", contentUpdate);
        formData.append("access", accessUpdate);
        formData.append("type", typeUpdate);
        if (audioFileUpdate) {
            formData.append("voice", audioFileUpdate);
        }
        if (imageUpdate.length > 0) {
            imageUpdate.forEach((file) => {
                if (file.file) {
                    formData.append("images[]", file.file);
                } else {
                    formData.append("images_id[]", file.id);

                }
            });
        }
        for (let pair of formData.entries()) {
            console.log(pair[0], pair[1].name); // In tên file để kiểm tra
        }

        const api = axios.create({
            baseURL: "https://beta.ellm.io/api",
        });

        api.post("/social-update", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': 'Bearer 123123ellm',
            },
        }).then((res) => {
            if (res.data.status === "error") {
                console.log('lỗi');
                console.log(res.data.content);
                f7.dialog.alert(res.data.content, 'Error');

            } else if (res.data.status === "success") {
                console.log(res.data);
                f7.dialog.alert(res.data.content, 'Success', () => {
                    f7.sheet.close();
                    setAudioFileUpdate("");

                    getSocials();
                }
                )
            }
        })
            .catch((error) => {
                f7.dialog.alert(res.data.content, 'Error');
                console.log("k ket noi dc api:", error);
            });

    }

    //Ân bài viết
    function socialHide() {
        const data = {
            "token": token,
            "active": selectActive
        }
        console.log(123, data);

        const api = axios.create({
            baseURL: "https://beta.ellm.io/api",
        });
        api.post("/social-hide", data, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer 123123ellm',
            },
        }).then((res) => {
            if (res.data.status === "error") {
                console.log('lỗi');
                f7.dialog.alert(res.data.content, 'Error');

            } else if (res.data.status === "success") {
                console.log(res.data.data);
                f7.dialog.alert(res.data.content, 'Success', () => {
                    console.log(123);
                    getSocials();
                });
            }
        })
            .catch((error) => {
                f7.dialog.alert(res.data.content, 'Error');
                console.log("k ket noi dc api");

            });
    }

    //Lưu bài viết
    function socialSave() {
        const data = {
            "token": token,
            "active": selectActive
        }
        console.log(123, data);

        const api = axios.create({
            baseURL: "https://beta.ellm.io/api",
        });
        api.post("/social-save", data, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer 123123ellm',
            },
        }).then((res) => {
            if (res.data.status === "error") {
                console.log('lỗi');
                f7.dialog.alert(res.data.content, 'Error');

            } else if (res.data.status === "success") {
                console.log(res.data.data);
                f7.dialog.alert(res.data.content, 'Success', () => {
                    console.log(123);
                    getSocials();
                });
            }
        })
            .catch((error) => {
                f7.dialog.alert(res.data.content, 'Error');
                console.log("k ket noi dc api");

            });
    }


    // xem video
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const viewSocial = {
        "avatar": "https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png",
        "access": "1",
        "name": "Thanh Thúy",
        "date": "31/07/2025",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "images": ["https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340", "https://images.pexels.com/photos/1194775/pexels-photo-1194775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "like": 1,
        "comment": 2,
        "share": 0,
        "comments": [
            {
                "avatar": "https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png",
                "name": "Nguyễn Văn A",
                "date": "31/07/2025",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            }
        ]
    }

    const textComment = [
        {
            "avatar": "https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png",
            "account": "Nguyễn Văn A",
            "date": "31/07/2025",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "active": "1234567890",
        },
        {
            "avatar": "https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png",
            "account": "Nguyễn Văn A",
            "date": "31/07/2025",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "active": "1234567890",
        },
        {
            "avatar": "https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png",
            "account": "Nguyễn Văn A",
            "date": "31/07/2025",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "active": "1234567890",
        },
        {
            "avatar": "https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png",
            "account": "Nguyễn Văn A",
            "date": "31/07/2025",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "active": "1234567890",
        },
        {
            "avatar": "https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png",
            "account": "Nguyễn Văn A",
            "date": "31/07/2025",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "active": "1234567890",
        },
        {
            "avatar": "https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png",
            "account": "Nguyễn Văn A",
            "date": "31/07/2025",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "active": "1234567890",
        },
        {
            "avatar": "https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png",
            "account": "Nguyễn Văn A",
            "date": "31/07/2025",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "active": "1234567890",
        },
        {
            "avatar": "https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png",
            "account": "Nguyễn Văn A",
            "date": "31/07/2025",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "active": "1234567890",
        }
    ]
    return (
        <Page name="social" >
            <CommonNavbar />

            {/* Page content */}

            <div className='m-3'>
                <div className=' p-3  border border-light shadow-sm rounded-4'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-8'>
                            <div className='d-flex align-items-center'>
                                <Link fill popoverOpen=".popover-menu-social">
                                    <img src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png" className='rounded-circle' style={{ width: "40px", height: "40px" }}></img>
                                </Link>
                                <span className='fst-italic  ms-3'>{name} {t("how_are_you_today?")}</span>
                            </div>
                        </div>
                        <div className='col-4 text-end'>
                            <Link className='d-flex align-items-center justify-content-end align-items-center' fill popupOpen="#add-social">
                                <Icon f7="plus" size="20px" className='me-1'></Icon>
                                <div className='mt-1'>Post</div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className=' p-0  border border-light shadow-sm rounded-4'>
                    <div className='d-flex align-items-center justify-content-between p-3'>
                        <div className='d-flex align-items-center'>
                            <img src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png" onClick={() => { profile_social(socials.account.uid) }} className='rounded-circle' style={{ width: "40px", height: "40px" }}></img>
                            <span className=' ms-2'>Thanh Thúy
                                <div className='fs-12 text-secondary d-flex align-items-center'>31/07/2025

                                </div>
                            </span>
                        </div>
                        <div className=''>
                            <Button fill popoverOpen=".popover-menu" className='rounded-circle  p-2 text-center' style={{ width: "30px", height: "30px" }}> <Icon f7="ellipsis" size="20px" color='white'></Icon></Button>
                        </div>
                    </div>
                    <div className='row px-4'>
                        <div className='col-6 p-1'>
                            <img src='https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340' className='w-100'></img>
                        </div>
                        <div className='col-6 p-1'>
                            <img src='https://images.pexels.com/photos/1194775/pexels-photo-1194775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className='w-100'></img>
                        </div>

                    </div>
                    <div className='mt-3' style={{ borderBottom: "0.5px solid #a8a7a7ff" }}></div>
                    <div className='row my-3 d-flex align-items-center'>
                        <div className='col-4 text-center'>
                            <img src='../image/12.gif' className='size-icon'></img>
                            1 {t("like")}
                        </div>

                        <Link className='col-4 text-center px-0 ' fill popupOpen="#comment-social">
                            <img src='../image/4.gif' className='size-icon'></img>
                            2 {t("comment")}
                        </Link>
                        <div className='col-4 text-center'>
                            <img src='../image/icon-share.gif' className='size-icon'></img>
                            {t("share")}
                        </div>
                    </div>
                </div>

                <div className=' p-0  border border-light shadow-sm rounded-4'>
                    <div className='d-flex align-items-center justify-content-between p-3'>
                        <div className='d-flex align-items-center'>
                            <img src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png" onClick={() => { profile_social(socials.account.uid) }} className='rounded-circle' style={{ width: "40px", height: "40px" }}></img>
                            <span className=' ms-2'>Thanh Thúy
                                <div className='fs-12 text-secondary d-flex align-items-center'>31/07/2025

                                </div>
                            </span>
                        </div>
                        <div className=''>
                            <Button fill popoverOpen=".popover-menu" className='rounded-circle  p-2 text-center' style={{ width: "30px", height: "30px" }}> <Icon f7="ellipsis" size="20px" color='white'></Icon></Button>
                        </div>
                    </div>
                    <div className='row px-4'>
                        <div
                            className="position-relative"
                            style={{ cursor: 'pointer' }}
                            onClick={togglePlay}
                        >
                            <video
                                ref={videoRef}
                                className="video-bg w-100"
                                muted
                                loop
                                playsInline
                            >
                                <source
                                    src="https://happycorp.com.vn/wp-content/uploads/2025/07/homevideo.mp4"
                                    type="video/mp4"
                                />
                            </video>

                            {!isPlaying && (
                                <div className="video-play-button">
                                    ▶
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='mt-3' style={{ borderBottom: "0.5px solid #a8a7a7ff" }}></div>
                    <div className='row my-3 d-flex align-items-center'>
                        <div className='col-4 text-center'>
                            <img src='../image/12.gif' className='size-icon'></img>
                            1 {t("like")}
                        </div>

                        <Link className='col-4 text-center px-0 ' fill sheetOpen=".comment-social-sheet">
                            <img src='../image/4.gif' className='size-icon'></img>
                            2 {t("comment")}
                        </Link>
                        <div className='col-4 text-center'>
                            <img src='../image/icon-share.gif' className='size-icon'></img>
                            {t("share")}
                        </div>
                    </div>
                </div>

                {socials && socials.map((socials) => {
                    return (
                        <React.Fragment key={socials.id}>
                            <Card className=' p-0  border border-0 shadow rounded-4'>
                                <div className='d-flex align-items-center justify-content-between p-3'>
                                    <div className='d-flex align-items-center'>
                                        <img src={`https://beta.ellm.io/${socials.account.avatar}`} onClick={() => { profile_social(socials.account.uid) }} className='rounded-circle' style={{ width: "40px", height: "40px" }}></img>
                                        <span className=' ms-2'>{socials.account.name}
                                            <div className='fs-12 text-secondary d-flex align-items-center'>{socials.date}
                                                {socials.access == 0 &&
                                                    <Icon f7="globe" size="14px" className='ms-1'></Icon>
                                                }
                                                {socials.access == 1 &&
                                                    <Icon f7="person_2" size="14px" className='ms-1'></Icon>
                                                }
                                            </div>
                                        </span>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        {socials.lang !== language && <Button className='bg-none p-1  rounded-3 me-3 fs-12'>{t("translate")} </Button>}

                                        <Button onClick={() => { getActive(socials.active, socials.account.uid, socials.accountsave) }} fill popoverOpen=".popover-menu" className='rounded-circle  p-2 text-center' style={{ width: "30px", height: "30px" }}> <Icon f7="ellipsis" size="20px" color='white'></Icon></Button>
                                    </div>
                                </div>
                                <div className='mx-3'> {socials.content} </div>
                                {socials.type == 'images' && (
                                    <>
                                        <div className="row px-4">
                                            {/* Xử lý khi chỉ có 1 hoặc 2 ảnh */}
                                            {socials.data.length <= 2 && socials.data.map((data, index) => (
                                                <div key={index} className={`px-1 p-1 ${socials.data.length === 1 ? 'col-12' : 'col-6'}`}>
                                                    <img style={{ minHeight: "240px", objectFit: "cover" }}
                                                        src={`https://beta.ellm.io/${data.data}`}
                                                        className="w-100 rounded-2"
                                                        onClick={() => handleClick(socials, index)}
                                                    />
                                                </div>
                                            ))}

                                            {/* Hiển thị 3 ảnh đầu nếu có nhiều hơn 2 ảnh */}
                                            {socials.data.length > 2 && socials.data.slice(0, 3).map((data, index) => (
                                                <div key={index} className="col-4 px-1 p-1">
                                                    <img
                                                        src={`https://beta.ellm.io/${data.data}`}
                                                        className="w-100 rounded-2"
                                                        onClick={() => handleClick(socials, index)}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Hàng dưới chứa 2 ảnh (nếu có ít nhất 4 ảnh) */}
                                        {socials.data.length > 3 && (
                                            <div className="row px-4">
                                                {/* Ảnh đầu tiên của hàng dưới */}
                                                <div className="col-6 px-1 p-1">
                                                    <img
                                                        src={`https://beta.ellm.io/${socials.data[3].data}`}
                                                        className="w-100 rounded-2"
                                                        onClick={() => handleClick(socials, 3)}
                                                    />
                                                </div>

                                                {/* Ảnh thứ hai của hàng dưới có overlay nếu có hơn 5 ảnh */}
                                                {socials.data.length > 4 &&
                                                    <div className="col-6 px-1 p-1 position-relative">
                                                        <img
                                                            src={`https://beta.ellm.io/${socials.data[4].data}`}
                                                            className="w-100 rounded-2"
                                                        // onClick={() => handleClick(socials)}
                                                        />
                                                        {socials.data.length > 5 && (
                                                            <div onClick={() => handleClick(socials, 4)} className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-50 d-flex justify-content-center align-items-center rounded-2">
                                                                <span className=" fs-4 fw-bold">
                                                                    {`${socials.data.length - 5}+`}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                }
                                            </div>
                                        )}
                                    </>
                                )}

                                {socials.type == "audio" && (
                                    <>
                                        <div className="px-3 mt-1" >
                                            {socials.data.map((voice, index) => (
                                                <div key={index} className="my-2  rounded-4 border-secondary " style={{ backgroundColor: "unset" }}>
                                                    <audio controls className="w-100">
                                                        <source src={`https://beta.ellm.io/${voice.data}`} type="audio/mpeg" />
                                                        Trình duyệt của bạn không hỗ trợ audio.
                                                    </audio>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                <div className='mt-3' style={{ borderBottom: "0.5px solid #353535" }}></div>
                                <div className='row my-3'>
                                    <div className='col-4 text-center' onClick={() => { LikeSocial(socials.active, socials.like) }}>
                                        {socials.accountlike == 1 ?
                                            <Icon f7="heart_fill" size="20px" className='me-1' color='red'></Icon>
                                            :
                                            <Icon f7="heart" size="20px" className='me-1'></Icon>
                                        }

                                        {socials.like} {t("like")}
                                    </div>

                                    <Link className='col-4 text-center px-0 ' fill sheetOpen=".comment-social-sheet" onClick={() => { social_id(socials.active, socials.comment) }}>
                                        <Icon f7="chat_bubble" size="20px" className='me-1'></Icon>
                                        {socials.comment} {t("comment")}
                                    </Link>
                                    <div className='col-4 text-center'>
                                        <Icon f7="arrowshape_turn_up_right" size="20px" className='me-1'></Icon>
                                        {t("share")}
                                    </div>
                                </div>
                            </Card>
                        </React.Fragment>
                    )
                })}

            </div>
            {/* success  */}
            <Sheet
                push
                className="success-social-sheet rounded-5 modal-success"
                opened={sheetOpenedSuccess}
                onSheetClosed={() => {
                    setSheetOpenedSuccess(false);
                }}
                style={{ height: "auto", width: "60%", backgroundColor: "rgba(52, 58, 64)", color: "white" }}
                swipeToClose
                swipeToStep
                backdrop>

                <PageContent className='py-4 text-center '>
                    <img src='../img/icons8-success.gif' className=''></img>
                    <div className='fs-2' style={{ fontWeight: "300" }}>Success</div>
                    <div className='fs-14  my-2'>Đã lưu thành công</div>
                    <div className='d-flex justify-content-center'>
                        <Button className='bg-success   fs-15  rounded-pill w-50' style={{ padding: "22px" }} sheetClose>OK</Button>
                    </div>
                </PageContent>
            </Sheet>

            {/* Detail Image  */}
            <Popup id="add-social">
                <View>
                    <Page>
                        <Navbar title="Thêm bài viết">
                            <NavRight>
                                <Link popupClose>Close</Link>
                            </NavRight>
                        </Navbar>
                        <List className='mt-3 mb-4 px-2'>
                            <div className='px-3 mb-2'>
                                {selectedContent.content}
                            </div>

                            <div id="carouselExampleControls0" className="carousel slide my-5" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {selectedContent && selectedContent.data.map((image, index) => (
                                        <div key={index} className={`carousel-item ${index === selectImage ? "active" : ""}`}>
                                            <img src={`https://beta.ellm.io/${image.data}`} className="d-block w-100" alt="..."></img>
                                        </div>
                                    ))}
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls0" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls0" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                            <div className='row mx-0 py-2 border-top border-bottom fs-14 mb-3'>
                                <div className='col-4 text-center' onClick={() => { LikeSocial(social_view.active, social_view.like) }}>
                                    {acc_like_social == 1 ?
                                        <Icon f7="heart_fill" size="20px" className='me-1' color='red'></Icon>
                                        :
                                        <Icon f7="heart" size="20px" className='me-1'></Icon>
                                    }

                                    {t("like")}
                                </div>

                                <div className='col-4 text-center px-0 ' >
                                    <Icon f7="chat_bubble" size="20px" className='me-1'></Icon>
                                    {social_view.comment} {t("comment")}
                                </div>
                                <div className='col-4 text-center'>
                                    <Icon f7="arrowshape_turn_up_right" size="20px" className='me-1'></Icon>
                                    {t("share")}
                                </div>
                            </div>

                            <div className='px-2' style={{ marginBottom: "70px" }}>
                                {listComment && listComment.map((cmt) => {
                                    return (
                                        <>
                                            <div className='row mt-3'>
                                                <div className='col-2'>
                                                    <img src={`https://beta.ellm.io/${cmt.avatar}`} className='w-100 rounded-circle'></img>
                                                </div>
                                                <div className='col-10 ps-0'>
                                                    <div className='d-flex align-items-center justify-content-between'>
                                                        <div className='fs-15'>{cmt.account} <span className='fs-12 text-muted ms-2'> {cmt.date}</span></div>
                                                        {cmt.id_account == acc_social_view.id ?
                                                            <div className='fs-12 d-flex align-items-center' onClick={() => { deleteComment(cmt.active) }}><Icon f7='trash' color='red' size="16px" className='me-1'></Icon>Xóa</div>
                                                            :
                                                            <div></div>
                                                        }

                                                    </div>
                                                    <div className='mt-1'>
                                                        <div className='w-100 rounded-3 border border-1  fs-15 p-2'>
                                                            {cmt.content}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                            <Card className='p-0 m-0 mt-4 mx-1 ' style={{
                                backgroundColor: "rgba(52, 58, 64)",
                                position: "fixed",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                zIndex: 1000, // đảm bảo nổi lên trên
                                borderTopLeftRadius: "1rem",
                                borderTopRightRadius: "1rem"
                            }}>
                                <div className="input-group m-0 mb-1  rounded-3 p-0 form-control rounded-pill-chat border border-0 " style={{ position: "relative" }}>
                                    <input
                                        rows={1}
                                        className="border border-0 ps-2 rounded-3 fs-15  "
                                        placeholder="Comment"
                                        style={{
                                            width: "90%",
                                            height: "45px"
                                        }}
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        aria-describedby="basic-addon1"
                                    ></input>
                                    <span
                                        className="clear-button position-absolute d-flex text-end justify-content-end"
                                        id="basic-addon2"
                                        style={{
                                            right: "5px",
                                            top: "17px",
                                            transform: "translateY(-50%)"
                                        }}
                                    >
                                        <Button onClick={CommentSocial} className='p-2 mt-2 rounded-3 bg-danger ' style={{ width: "35px", height: "35px" }}>
                                            <Icon f7="paperplane" size="20px" ></Icon>
                                        </Button>
                                    </span>

                                </div>
                            </Card>



                        </List>
                    </Page>
                </View>
            </Popup>

            {/* menu-social */}
            <Popover className="popover-menu-social " style={{ width: "250px" }}>
                <List className='px-3'>
                    <ListItem >
                        <Link className='d-flex align-items-center fs-14  fw-bold' href="/profile/" data-view=".view-main" popoverClose >
                            <img src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png" className='rounded-circle me-2' style={{ width: "40px", height: "40px" }}></img>
                            Thanh Thúy
                        </Link>
                    </ListItem>
                    <ListItem >
                        <Link className='d-flex align-items-center fs-14 ' href="/social/" data-view=".view-main" popoverClose >
                            <Icon f7="doc_richtext" size="20px" className='me-2'></Icon>
                            {t("feed")}
                        </Link>
                    </ListItem>
                    <ListItem >
                        <Link className='d-flex align-items-center fs-14 ' href="/chat-explore/" data-view=".view-main" popoverClose >
                            <Icon f7="cursor_rays" size="20px" className='me-2'></Icon>
                            {t("explore")}
                        </Link>
                    </ListItem>
                    <ListItem  >
                        <Link className='d-flex align-items-center fs-14 ' href="/social-follower/" data-view=".view-main" popoverClose >
                            <Icon f7="person_3" size="20px" className='me-2'></Icon>
                            {t("friends")}
                        </Link>
                    </ListItem>
                    <ListItem >
                        <PageTransition className='d-flex align-items-center fs-14 ' href="/social-save/" data-view=".view-main" popoverClose>
                            <Icon f7="bookmark" size="20px" className='me-2'></Icon>
                            {t("saved")}
                        </PageTransition>
                    </ListItem>
                    <ListItem  >
                        <PageTransition className='d-flex align-items-center fs-14 ' href="/social-hide/" data-view=".view-main" popoverClose>
                            <Icon f7="eye_slash" size="20px" className='me-2'></Icon>
                            {t("hidden")}
                        </PageTransition>
                    </ListItem>
                </List>
            </Popover>

            {/* menu từng social */}
            <Popover className="popover-menu " style={{ width: "200px" }}>
                <List className='px-3'>
                    {/* {uid_account == selectuidSocial && */}
                    <ListItem >
                        <Link className='d-flex align-items-center fs-14 ' onClick={() => { social_id(selectActive) }} fill sheetOpen=".edit-social-sheet" popoverClose >
                            <Icon f7="pencil_circle" size="20px" className='me-2'></Icon>
                            Chỉnh sửa
                        </Link>
                    </ListItem>
                    {/* } */}

                    <ListItem >
                        <Link className='d-flex align-items-center fs-14 ' onClick={() => { socialSave() }} popoverClose >
                            <Icon f7="bookmark" size="20px" className='me-2'></Icon>
                            {selectSaveSocial == 1 ?
                                <>
                                    Xóa lưu
                                </>
                                :
                                <>
                                    Lưu bài viết
                                </>
                            }
                        </Link>
                    </ListItem>
                    <ListItem popoverClose >
                        <Link className='d-flex align-items-center fs-14 ' onClick={() => { socialHide() }} popoverClose >
                            <Icon f7="eye_slash" size="20px" className='me-2'></Icon>
                            Ẩn bài viết
                        </Link>
                    </ListItem>
                    <ListItem >
                        <div className='d-flex align-items-center fs-14'>
                            <Icon f7="link_circle" size="20px" className='me-2'></Icon>
                            Copy bài viết
                        </div>
                    </ListItem>
                    <ListItem popoverClose >
                        <div className='d-flex align-items-center fs-14'>
                            <Icon f7="ant" size="20px" className='me-2'></Icon>
                            Báo cáo
                        </div>
                    </ListItem>
                    {/* {uid_account == selectuidSocial && */}
                    <ListItem popoverClose >
                        <Link className='d-flex align-items-center fs-14 ' fill sheetOpen=".delete-social-sheet" popoverClose >
                            <Icon f7="trash" size="20px" className='me-2'></Icon>
                            Xóa bài viết
                        </Link>
                    </ListItem>
                    {/* } */}
                </List>
            </Popover>

            {/* add social */}
            <Popup id="add-social">
                <View>
                    <Page>
                        <Navbar title="Thêm bài viết">
                            <NavRight>
                                <Link popupClose>Close</Link>
                            </NavRight>
                        </Navbar>
                        <List className='mt-3 mb-4 px-2'>
                            <div className='px-3'>

                                <textarea rows={5} className=' rounded-3 border border-1 px-2  mb-3' placeholder="Hãy nêu cảm nghĩ của bạn" onChange={(e) => setContentAdd(e.target.value)}></textarea>
                            </div>

                            <div className="m-0 mx-3 p-3 rounded-4 border border-1" style={{ minHeight: "300px" }}>
                                <div className="image-upload-container">
                                    <input
                                        id="fileInput"
                                        type="file"
                                        multiple
                                        accept="image/*,video/*"
                                        style={{ display: "none" }}
                                        onChange={handleImageChange}
                                    />

                                    <div className="image-grid">
                                        <div className="upload-box text-center mt-4" onClick={triggerFileInput} style={{ cursor: 'pointer' }}>
                                            <Icon f7="cloud_upload" size="30px" />
                                            <div>Thêm hình ảnh / video</div>
                                        </div>

                                        <div className="row mt-3">
                                            {media.map((item, index) => (
                                                <div key={index} className="image-item position-relative col-4 mb-3">
                                                    <Button
                                                        className="btn bg-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle p-1"
                                                        onClick={() => handleDeleteMedia(index)}
                                                        style={{ width: "30px", height: "30px" }}
                                                    >
                                                        <Icon f7="trash" size="15px" color="white" />
                                                    </Button>

                                                    {item.type === 'image' ? (
                                                        <img src={item.preview} alt={`Ảnh ${index + 1}`} className="preview-img w-100 rounded-3" />
                                                    ) : (
                                                        <video
                                                            src={item.preview}
                                                            controls
                                                            className="preview-img w-100 rounded-3"
                                                            style={{ maxHeight: "150px", objectFit: "cover" }}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button className=' rounded-pill p-4 bg-pink  mt-5 mx-3 fs-6' onClick={handleAddPost}>Đăng</Button>
                        </List>
                    </Page>
                </View>
            </Popup>

            {/* Edit Social */}
            <Popup id="edit-social">
                <View>
                    <Page>
                        <Navbar title="Sửa bài viết">
                            <NavRight>
                                <Link popupClose>Close</Link>
                            </NavRight>
                        </Navbar>
                        <List className='mt-3 mb-4 px-2'>
                            <div className='px-3'>

                                <textarea rows={5} className=' rounded-3 border border-1 px-2  mb-3' placeholder="Hãy nêu cảm nghĩ của bạn" onChange={(e) => setContentAdd(e.target.value)}></textarea>
                            </div>

                            <div className="m-0 mx-3 p-3 rounded-4 border border-1" style={{ minHeight: "300px" }}>
                                <div className="image-upload-container">
                                    <input
                                        id="fileInput"
                                        type="file"
                                        multiple
                                        accept="image/*,video/*"
                                        style={{ display: "none" }}
                                        onChange={handleImageChange}
                                    />

                                    <div className="image-grid">
                                        <div className="upload-box text-center mt-4" onClick={triggerFileInput} style={{ cursor: 'pointer' }}>
                                            <Icon f7="cloud_upload" size="30px" />
                                            <div>Thêm hình ảnh / video</div>
                                        </div>

                                        <div className="row mt-3">
                                            {media.map((item, index) => (
                                                <div key={index} className="image-item position-relative col-4 mb-3">
                                                    <Button
                                                        className="btn bg-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle p-1"
                                                        onClick={() => handleDeleteMedia(index)}
                                                        style={{ width: "30px", height: "30px" }}
                                                    >
                                                        <Icon f7="trash" size="15px" color="white" />
                                                    </Button>

                                                    {item.type === 'image' ? (
                                                        <img src={item.preview} alt={`Ảnh ${index + 1}`} className="preview-img w-100 rounded-3" />
                                                    ) : (
                                                        <video
                                                            src={item.preview}
                                                            controls
                                                            className="preview-img w-100 rounded-3"
                                                            style={{ maxHeight: "150px", objectFit: "cover" }}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button className=' rounded-pill p-4 bg-pink  mt-5 mx-3 fs-6' onClick={handleAddPost}>Đăng</Button>
                        </List>
                    </Page>
                </View>
            </Popup>
            {/* Modal comment */}
            <Popup id="comment-social" className="auto-height-popup">
                <View>
                    <Page>
                        <Navbar title="Bình luận bài viết">
                            <NavRight>
                                <Link popupClose>Close</Link>
                            </NavRight>
                        </Navbar>
                        <List className='mt-3 mb-4 px-2'>

                            <Card className=' p-0 mx-1  border border-0 shadow-sm fs-13 rounded-4'>
                                <div className='d-flex align-items-center justify-content-between p-3'>
                                    <div className='d-flex align-items-center'>
                                        <img src={`${viewSocial.avatar}`} className='rounded-circle' style={{ width: "40px", height: "40px" }}></img>
                                        <span className='border border-0  ms-2'>
                                            {viewSocial.name}
                                            <div className='fs-12 text-secondary d-flex align-items-center'>{viewSocial.date}
                                                {viewSocial.access == 0 &&
                                                    <Icon f7="globe" size="14px" className='ms-1'></Icon>
                                                }
                                                {viewSocial.access == 1 &&
                                                    <Icon f7="person_2" size="14px" className='ms-1'></Icon>
                                                }
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className='mx-3'> {viewSocial.content} </div>

                                {/* <div className="row px-4" >
                                    {viewSocial.images.length <= 2 && viewSocial.images.map((data, index) => (
                                        <div key={index} className={`px-1 p-1 ${viewSocial.images.length === 1 ? 'col-12' : 'col-6'}`}>
                                            <img style={{ minHeight: "240px", objectFit: "cover" }}
                                                src={`${data[index]}`}
                                                className="w-100 rounded-2"
                                                onClick={() => handleClick(viewSocial, index)}
                                            />
                                        </div>
                                    ))}

                                    {viewSocial.images.length > 2 && viewSocial.images.slice(0, 3).map((data, index) => (
                                        <div key={index} className="col-4 px-1 p-1">
                                            <img
                                                src={`${data.data}`}
                                                className="w-100 rounded-2"
                                                onClick={() => handleClick(viewSocial, index)}
                                            />
                                        </div>
                                    ))}
                                </div> */}
                                <div className='row px-4 mt-2'>
                                    <div className='col-6 p-1'>
                                        <img src='https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340' className='w-100'></img>
                                    </div>
                                    <div className='col-6 p-1'>
                                        <img src='https://images.pexels.com/photos/1194775/pexels-photo-1194775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className='w-100'></img>
                                    </div>
                                </div>

                                {viewSocial.images.length > 3 && (
                                    <div className="row px-4">
                                        <div className="col-6 px-1 p-1">
                                            <img
                                                src={`${viewSocial.images[3].data}`}
                                                className="w-100 rounded-2"
                                                onClick={() => handleClick(viewSocial, 3)}
                                            />
                                        </div>

                                        {viewSocial.images.length > 4 && (
                                            <div className="col-6 px-1 p-1 position-relative">
                                                <img
                                                    src={`${viewSocial.images[4].data}`}
                                                    className="w-100 rounded-2"
                                                />
                                                {viewSocial.images.length > 5 && (
                                                    <div onClick={() => handleClick(viewSocial, 4)} className="position-absolute top-0 start-0 w-100 h-100  bg-opacity-50 d-flex justify-content-center align-items-center rounded-2">
                                                        <span className=" fs-4 fw-bold">
                                                            {`${viewSocial.images.length - 5}+`}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}



                                <div className='mt-3' style={{ borderBottom: "0.5px solid #353535" }}></div>
                                <div className='row my-3'>
                                    <div className='col-4 text-center' onClick={() => { LikeSocial(social_view.active, social_view.like) }}>
                                        {acc_like_social == 1 ?
                                            <Icon f7="heart_fill" size="20px" className='me-1' color='red'></Icon>
                                            :
                                            <Icon f7="heart" size="20px" className='me-1'></Icon>
                                        }

                                        {t("like")}
                                    </div>

                                    <div className='col-4 text-center px-0 ' >
                                        <Icon f7="chat_bubble" size="20px" className='me-1'></Icon>
                                        {social_view.comment} {t("comment")}
                                    </div>
                                    <div className='col-4 text-center'>
                                        <Icon f7="arrowshape_turn_up_right" size="20px" className='me-1'></Icon>
                                        {t("share")}
                                    </div>
                                </div>
                            </Card>
                            <div className='px-3 fs-13' style={{ marginBottom: "70px" }}>
                                {textComment && textComment.map((cmt) => {
                                    return (
                                        <>
                                            <div className='row mt-3 border-bottom'>
                                                <div className='col-2'>
                                                    <img src={`${cmt.avatar}`} className='w-100 rounded-circle'></img>
                                                </div>
                                                <div className='col-10 ps-0'>
                                                    <div className='d-flex align-items-center justify-content-between'>
                                                        <div className='fs-15 fw-bold'>{cmt.account} <span className='fs-12 text-muted ms-2'> {cmt.date}</span></div>
                                                        {/* {cmt.id_account == acc_social_view.id ? */}
                                                        <div className='fs-12 d-flex align-items-center' onClick={() => { deleteComment(cmt.active) }}><Icon f7='trash' color='red' size="16px" className='me-1'></Icon>Xóa</div>
                                                        {/* :
                                                        <div></div>
                                                         } */}

                                                    </div>
                                                    <div className='mt-1'>
                                                        <div className='w-100  fs-15 p-2'>
                                                            {cmt.content}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                            <Card className='p-0 m-0 mt-4  mx-2 mb-2 border border-2 rounded-4 ' style={{
                                // backgroundColor: "rgba(52, 58, 64)",
                                position: "fixed",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                zIndex: 1000, // đảm bảo nổi lên trên
                            }}>
                                <div className="input-group m-0 mb-1  rounded-3 p-0 form-control rounded-pill-chat border border-0 " style={{ position: "relative" }}>
                                    <input
                                        rows={1}
                                        className="border border-0 rounded-4c ps-2 rounded-3 fs-15  "
                                        placeholder="Comment"
                                        style={{
                                            width: "90%",
                                            height: "45px"
                                        }}
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        aria-describedby="basic-addon1"
                                    ></input>
                                    <span
                                        className="clear-button position-absolute d-flex text-end justify-content-end rounded-4"
                                        id="basic-addon2"
                                        style={{
                                            right: "5px",
                                            top: "20px",
                                            transform: "translateY(-50%)"
                                        }}
                                    >
                                        <Button onClick={CommentSocial} className='p-2 mt-2 rounded-3 bg-pink ' style={{ width: "35px", height: "35px" }}>
                                            <Icon f7="paperplane" size="20px" ></Icon>
                                        </Button>
                                    </span>

                                </div>
                            </Card>


                        </List>
                    </Page>
                </View>
            </Popup>
            {/* //delete social */}
            <Sheet
                push
                className="delete-social-sheet rounded-5 modal-delete"
                opened={sheetOpenedDeleteSocial}
                onSheetClosed={() => {
                    setSheetOpenedDeleteSocial(false);
                }}
                style={{ height: "auto", width: "70%", backgroundColor: "rgba(52, 58, 64)", color: "white" }}
                swipeToClose
                swipeToStep
                backdrop>

                <PageContent className='p-4 text-center'>
                    <img src='../img/deleted.svg'></img>
                    <div className='fs-14  my-2'>{t("title_delete")}</div>
                    <div className='d-flex align-items-center justify-content-center '>
                        <Button className='  fs-15 rounded-pill me-3' style={{ padding: "22px" }} sheetClose>{t("cancel")}</Button>
                        <Button className='bg-danger   fs-15  rounded-pill' style={{ padding: "22px" }} onClick={DeleteSocial}>{t("delete")}</Button>
                    </div>
                </PageContent>
            </Sheet>


        </Page>
    );
};
export default SocialPage;
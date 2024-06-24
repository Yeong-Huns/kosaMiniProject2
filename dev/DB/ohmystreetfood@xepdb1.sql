drop table chatroom  cascade CONSTRAINTS  purge;
select * from tab;


// CHATROOM
drop table CHATROOM cascade CONSTRAINTS  purge;
CREATE TABLE CHATROOM (
    chatroomno NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    roomaddress VARCHAR2(255),
    storename VARCHAR2(255) NOT NULL,
    username VARCHAR2(255), 
    ownername VARCHAR2(255), 
    ownervisible CHAR(1) DEFAULT '0' NOT NULL,
    customervisible CHAR(1) DEFAULT '0' NOT NULL,
    updatedat DATE DEFAULT SYSDATE NOT NULL,
    CONSTRAINT fk_username FOREIGN KEY (username) REFERENCES MEMBER(username), 
    CONSTRAINT fk_ownername FOREIGN KEY (ownername) REFERENCES MEMBER(username), 
    CONSTRAINT uq_roomaddress UNIQUE (username, ownername)
);


// MESSAGE 
drop table MESSAGE cascade CONSTRAINTS  purge;
CREATE TABLE MESSAGE (
    messageno NUMBER PRIMARY KEY,
    content VARCHAR2(1000 CHAR),
    sender VARCHAR2(255), 
    chatroomno NUMBER, 
    isreceived CHAR(1) DEFAULT '0' NOT NULL,
    createdat DATE DEFAULT SYSDATE NOT NULL,
    CONSTRAINT fk_sender FOREIGN KEY (sender) REFERENCES MEMBER(username), 
    CONSTRAINT fk_chatroomno FOREIGN KEY (chatroomno) REFERENCES CHATROOM(chatroomno) -- chatroom_table과 chatroom_id를 실제 참조 테이블과 컬럼명으로 변경 필요
);
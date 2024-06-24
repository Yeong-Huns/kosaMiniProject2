package org.omsf.chatRoom.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * packageName    : org.omsf.chatRoom.model
 * fileName       : ChatRoomVO
 * author         : Yeong-Huns
 * date           : 2024-06-24
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-06-24        Yeong-Huns       최초 생성
 */
@Getter
@Setter
public class ChatRoomVO {
    private long chatroomNo;
    private String roomAddress;
    private String storeName;
    private String username;
    private String ownerName;
    private char ownerVisible;
    private char customerVisible;
    private Date createdAt;
    private Date updatedAt;
}

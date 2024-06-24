package org.omsf.chatRoom.dao;

import org.springframework.stereotype.Repository;

import java.util.Map;

/**
 * packageName    : org.omsf.chatRoom.dao
 * fileName       : ChatRepository
 * author         : Yeong-Huns
 * date           : 2024-06-20
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-06-20        Yeong-Huns       최초 생성
 */
@Repository
public class ChatRepositoryImpl implements ChatRepository {
    @Override
    public void getOrCreateChatRoom(String ownername, String customername, Map<String, Object> params) {

    }
}

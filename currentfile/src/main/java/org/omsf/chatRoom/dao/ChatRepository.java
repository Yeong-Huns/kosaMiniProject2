package org.omsf.chatRoom.dao;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
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
public interface ChatRepository {
    @Select("{CALL GET_OR_CREATE_CHATROOM(#{ownername, mode=IN, jdbcType=VARCHAR}, #{customername, mode=IN, jdbcType=VARCHAR}, #{chatroomid, mode=OUT, jdbcType=NUMERIC})}")
    void getOrCreateChatRoom(@Param("ownername") String ownername,
                             @Param("customername") String customername,
                             @Param("chatroomid") Map<String, Object> params);
}

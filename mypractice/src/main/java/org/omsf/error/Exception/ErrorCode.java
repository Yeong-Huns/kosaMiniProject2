package org.omsf.error.Exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

/**
 * packageName    : org.omsf.error.code
 * fileName       : ErrorCode
 * author         : Yeong-Huns
 * date           : 2024-06-18
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-06-18        Yeong-Huns       최초 생성
 */
@Getter
public enum ErrorCode {
    INVALID_INPUT_VALUE(HttpStatus.BAD_REQUEST, "E1", "페이지가 응답하지 않습니다."),
    METHOD_NOT_ALLOWED(HttpStatus.METHOD_NOT_ALLOWED, "E2", "잘못된 HTTP 메서드를 호출했습니다."),
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "E3", "서버 에러가 발생했습니다."),
    NOT_FOUND(HttpStatus.NOT_FOUND, "E4", "존재하지 않는 대상입니다."),
    MESSAGE_NOT_READABLE(HttpStatus.BAD_REQUEST, "E5", "지원하지 않는 형식의 입력값입니다."),
    RESOURCE_NOT_FOUND(HttpStatus.NOT_FOUND, "E004", "찾을수 없습니다."),
    ;


    private final HttpStatus status;
    private final String code;
    private final String message;

    ErrorCode(HttpStatus status, String code, String message) {
        this.message = message;
        this.code = code;
        this.status = status;
    }
}
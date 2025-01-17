package com.ssafy.dreamgream.global.sse;

import com.ssafy.dreamgream.domain.post.dto.response.ImageGenerateResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
public class SSEService {

    private final ConcurrentHashMap<Long, SseEmitter> sseEmitters = new ConcurrentHashMap<>();

    public void addSseEmitter(Long memberId, SseEmitter emitter) {
        emitter.onCompletion(() -> sseEmitters.remove(memberId));
        emitter.onTimeout(() -> sseEmitters.remove(memberId));

        sseEmitters.put(memberId, emitter);
    }

    public void sendImageResponse(Long sseId, ImageGenerateResponseDto dto) {
        log.info("sending image url");
        SseEmitter emitter = sseEmitters.get(sseId);
        log.info("sseId : {}", sseId);
        if (emitter != null) {
            try {
                log.info("sending data to client");
                emitter.send(dto);
            } catch (IOException e) {
                // Handle exception when sending the response to the client
                e.printStackTrace();
                log.error("ERROR 발생 : {} ", e.getMessage());
            } finally {
                log.info("emitter complete");
                emitter.complete();
            }
        } else {
            // Handle case when SSEEmitter is not found for the given SSE ID
            // This might happen if the SSE connection is closed or expired
            log.info("sseid로 emitter를 찾지 못했습니다");
        }
    }

    private void removeEmitter(Long sseId) {
        sseEmitters.remove(sseId);
        System.out.println("SSE connection closed for user: " + sseId);
    }

    public boolean checkEmitter(Long sseId) {

        return sseEmitters.containsKey(sseId);
    }
}

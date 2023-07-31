package com.ssafy.dreamgream.domain.member.service;

import com.ssafy.dreamgream.domain.member.dto.response.MemberResponseDto;
import com.ssafy.dreamgream.domain.member.entity.Member;
import com.ssafy.dreamgream.domain.member.enums.Gender;
import java.util.List;
import org.springframework.security.core.AuthenticationException;

public interface MemberService {

    Member getCurrentMember() throws AuthenticationException;

	MemberResponseDto updateInfo(String nickname, Gender gender, Integer birthyear);

	List<Member> findByNickname(String nickname);
}

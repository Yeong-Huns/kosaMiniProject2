package org.omsf.user;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.omsf.member.dao.GeneralMemberRepository;
import org.omsf.member.dao.MemberRepository;
import org.omsf.member.dao.OwnerRepository;
import org.omsf.member.model.GeneralMember;
import org.omsf.member.model.Member;
import org.omsf.member.model.Owner;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserSecurityService implements UserDetailsService {
	
	private final MemberRepository<Member> memberRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Optional<Member> _member = memberRepository.findByUsername(username);
		
		if (!_member.isPresent()) {
            throw new UsernameNotFoundException("사용자를 찾을수 없습니다.");
        }
		
		Member member = _member.get();
		
		List<GrantedAuthority> authorities = new ArrayList<>();
        if (member.getMemberType().equals("admin")) {
            authorities.add(new SimpleGrantedAuthority(UserRole.ADMIN.getValue()));
        } else if (member.getMemberType().equals("owner")) {
            authorities.add(new SimpleGrantedAuthority(UserRole.OWNER.getValue()));
        } else {
        	authorities.add(new SimpleGrantedAuthority(UserRole.USER.getValue()));
        }
        return new User(member.getUsername(), member.getPassword(), authorities);
	}


}
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2021-2023",
      content: (
        <div className="">
          <p
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Completed higher secondary education with focus on science and mathematics, laying the foundation for engineering studies.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://content3.jdmagicbox.com/comp/porbandar/k7/9999px286.x286.120607103952.v9k7/catalogue/sigma-public-school-and-hostel-ranavav-porbandar-english-medium-schools-lnuzoi4cvh.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWav2Aj8IYCWAp--LkuKjsN8Z3AWMdnUqkSg&s"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADMzsqCDfEA_93jkZNQVybvIpPi6l8dP55g&s"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPytlvmKgejOeYYXTXja2VGmmmeJxFVkpGdA&s"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "2023-Current",
      content: (
        <div>
          <p
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Currently pursuing advanced studies in Information and Communication Technology with a focus on computational science and modern software development.
          </p>
          <p
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNw_XjETPyVnpNEFcYZatJ-Yox24_X-6xS8Q&s"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://raw.githubusercontent.com/nilesh7757/Portfolio-Nilesh-Mori/main/public/DAIICT.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-OUBvEif5BlIHZwD00ibn_eQZbHl_1IfJg&s"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAACsCAMAAADlsyHfAAABF1BMVEX////vPyMnNYb/wg73lB0lM4UeLoMhMIT/wAAaK4IjMoX/2nv/9u7/zlP3kgBpcqfv8PUtPIz//veqr833+PsWKIHZ3OrIy98MIn/09fm5vtbp6vJYYp8AHn7vOx00Qo+KkbtCTpRgaaRXYZ2Umr+Mkrzi5O9OWpvvOBidosVkbaY7Ro+zt9KBiLW6vtf96ebuLQD/9+L83Nj5vLT4saj0gHD82tbyblz6yMHwSCt2fq/R0+RKVZj+9Or82bX/7sL2mYz1joDxVj73o5jze2r1iXz/zELyYEvyalcAFXv/9Nb/34fxTjT5t6//ySv948b5sGH4nzn6uHH/4Zj7w4n96tL/1Gb/6Kz5p0z7y5r/1F/4nSQAAHhpUpNWAAATXUlEQVR4nO2cCXvbNhKGaaYkA9iNSIsQqfuwLFGntUkdO6KyzdU4brPZHpvu+f9/x84APCXaIiU7Zlp+T5+1QpEj4NVgMABGK0mFChUqVKhQoUKFChUqVKhQoUKFChUqVKhQoS+s4+OHbsFXoJd/fegWfAU6elJQ2qqjJ9+sUzo7e5CW5FgAad2X3r5+mKbkVwBpndLVxz+UKx3/uLcJhBSndLZw3u5tNkc6/vb7fU1wSN9E49J3i9bHo33N3r1++suODx5/+3iDUsb+eZAivnTVOsijKx2+35ESQHq0Runsh2wmPEghpefOwUEeXenw8Y6UANI6pWeLbFHXhxSMuFcA6WDxt53ac586fPz4006rA/Skx/ERd77INoGHkIQvHcFoA1e6yp0rHUJXd/IlhBSndHbQevE0i4kQkqB0iYzy6EqH2NVdKHFIj6Ij7m+LAyeTK0UgffPk75L02uGQ8udKh7yr77OPOAEpSunCAVfKEpVikD5LRy+EJx04z2K3PT0/k84yuehd61B09VNmX/IghSPuKe/fqwwmopB+htEmHAlc6U3kpsuLxQXOCZdZG3iHOvS6mnnE+ZACX3qLfWwdZBgqazHp3Id0EBK5vGg5mDm9dl48u83U/erQ72pWSgEknxKfmg4WGXLBKKSX0lnLZ3TgXIgbLi8cRyC7arUWD0fpMOhqxkwghCRG3HMv6r5JH5UiKcDPPO4fxFzp2YcFt+mcCYBZ+N+tDsOuZotLEUiPHv/kJYLYpfRdiedJ75wQkvMOMooXPnZwKQ4w29x5hzqMdDXTiItB+lGS3nijJcMEHkL65aX09EU43MDKZYDd+cGPd85D+VIEElB6mf7B6HD7BKMtGCxO6lwwgPTkV9wAiDASrtQKEoJ3jrNwrt4+f6DNpiikTCMuCum3IBHEL/xFWhMhJMgkP0QdCdA8910Jsviz1psfnj3gblwMUpYRFx1uP0pnb8I+pp6GAki/HIksKwrpHLfg+PCFF5cPm4PHIWWgFEkBvo0kgtitDylNBFsl//CiTlS4o4CZE9J6aK1BghGXMi5FIP0zmggeRHPB2xVA+ixJH1trkHAqe47Gvtu9c3eldUip41JkuP1FOov10c8Ft8mH9Es07gf+ePCUs28936N3d6QNSGlHXLgs+f1YehYfLK10ruRv3/4jzLLWXamVJTm9N21CSulLIaR/xhPB9K7ke9Jnb7ttzZXwdOnd4t1+/bsTJUBKRykcbsfS0fpgcVK5kgfpX35GvW7kFQ7DPJwLJEGCEbf9UC3YKvk9vuwS/Uv1/QtIT/4dzbJiVmDiv3rILRJfiZAePT7c+mAA6fuN0QZapAm3nid9jmVZUSPgRZc5CEk3eNLh9h0Bf2fy07F0lhB105wuiRPcn+NZ1npUyoMSY9J2PwohHSYkgqgUrhQcc296oiCdlyOBpNnt9zQP+pC+l44+JAyWNK7EIf33pXSWjMj58MCrkUAJeVIaPwpOS96/5Hnx5lBJcbrEq0p+ldazLM+LPuQhZAttZtzpGPmQfkpMBA9Srbn80puLDQOO8y4HiXagjbVbSkY+pMh225q2n3nz4XYc3dwWTugc/JAnRJu7AGkZeSe474/9ze1NSK+2mcBKt183sqzcIdrYT0rNyIP0242jbfFx67YSQvp7fLS1Fq3XD3oOmaj4zmR6Rh4kWL+8SJrbFhcpwi5Aim+3tRYf3+YkNYoptsedgZGoKnmfuOxyWmkQIaTYdlvLeZNLRPHTkiyMBKTfEpZd6bwIBZA++4ea4EUvvssnoti5WyZGHNKn9e02PPY5Tx12j57869irt2ktrnKSXScpPMHNxohXuv1nLRHEyTtD2D3yNwAguX7Ak/7tCmoBMjLikNa225wXrzNN3kdicxsR5WT9cYP8qpKsjPhwg9EWzG2thfMqY0x5+V/cVfNCWJ5/MHH4eDdGCAke+s7ZY/J+CaPtXKw/zs5fZW7Bl5OodMvOyKvjFlNTy7naZfJ++VKSeAh7+uogY3XzlxWvmdyBEUB6dOydse45eZ+9buViu/9mYfXtT7s8ePwtbrctIC262mtmen6+gLRhHwv3r8PHO/mR+G3J0QfHudgL0eU7SBsW5/me3ADSboyk4/8cw9S05+bhZQuzpLS1Aw+m33dkJB3DkuTZvikgZllO7sq2N7T777Hu4KfYuLntfMhxgpQHwZrGuSoY3a5zx8n0E4I/o84cJw81I/nWd4s3+duqzZsunLzt+OdPT/NQxJZ3vcrPEW1+VcSjQoUKFSpUqFB+NO33++XMT9Xhqb57B4ayyD3t90/Ne/2IasXToB79oLHN7GHsxvmyX99mrEIYu44j2TS0rvmyoydc1qFNSdc3VL5m7H+p7gxljpblDFznbVnIaK9Ko4F/uaTKWiN634gRdrKtKRWwY09jl8CQ2rjhdq4pGB4mGF5CC0rbWo8q27LczAbJXNqELdPfP29TRYhqKjNmHqZ1SOZQk2VibTG2C6SGCn2sbVweaNAuVknRgx0gDQwqK8zdfqOnWluRQymsLdq7CQn6wu4L0vUmpD4DW6yToge7QrIzQJoAJMoYs21CoV3UnuPljeE2ZaxZ2jaMd4FkgeHxhuH6hDemPUh6JK4dIEn9JrP76W9HT6JDt1Jx57MuQWAGNmwDkuR2yltbsgskmJ1G1Y2LZcI9m42292AXSOa8s+m8Nws9STsR32S9w4ASm0lJkNJoJ0iJghCoQBTUVtvnoF0gZRR6knbif5Uj5vm46FutNOn2RKctyHfgGzfL8HcqWaVJey7haz6T1jFVqXiQ5tVRrzsZT0X3AkOTXjDpWp3GZDJcigjnYm617ko1VZGNJZEVMveuwGedutK8N+kuIZaY5cakWxIGOCSzcjoUbwnVy6UVtF1kLdURNi/2TLbsLQ5J4vF5LjypN2IqpSrjEaPTJGyiS9UTm9jLmkaoXZZ68Jo7oXtNyPVcQFI7Q6bBY+Sk7kEKDPU4JWtIiKZRjZAl/nsEhuX1DAyfGg8gLgXuvGKk2Z8xVaFEHZkNpilUFWEFIakjg8AVQjr8I/S+wVT8DCbjqNInkGaUe+Ez5hhansG/xXALIGEsYKe8lUpb5hOf0kTmp0ymXV0ye5pMG23Kh9UYu4KtqtiKbHuQYIyIiZLw7CdmCCNMhRJZg/80b2CPCPjuGqQB2itLM2hM08sCcPxNxERMjRIRBonrQZIp9WZnNAnfKFVgGoK7NBlu0bvw7kQLnzHRv3sZIMU9yQU7ZMn7BkHBbmIDtCG8fUo8SCq2iDWb/ytHIDE5AonYzSYGN/tUQAILYEjxDEnTpt2bu7Uek5XrOoekrEOCb0RmumTBp5NZAElWVJsbBsLCILZUQFKgRTZ+lI3jSe/ZrG+5IxlAlRCSgnREq9Cgyf17d0iGIqsl0Tf1xNUtqsgKzndRSIpRHujuIBmSoi5dvdIHJ6CTgWeoETEEvRJTVkPjQT4BUh08lfcfPECRBwEkdVzRRyqnbelzbDhSR0gKHVV0q8TwHrxbX/Kn4EMpxAgOic0G9T7FZ8zskOLDzaKBJykGejr2VnPjkGxv+kyERES6PwqDW2hI9QJrtV5x3Zkqs34iJJw+ZD6S0Ejfh8Shmw0cp/gmxHU6qQtIYko1+Tfi2dIHFdeaKIpc4ZBol7dYE73Yz5PKTDQLrfB1qaUqCi5HIpAUQ7oZkr+UqIMXkA43RFdRQ/BqNjRgDUSF629CqmL8aY/K5XJfVvinCkgqX8rN8H58ATm5ghMxQFJk7yvGiY6Pt3JpImsqhiHqckhi2J4KsHtCmuCixorkSZa2ASkwnwipLVIW8wR6tYzkSS4V6xq9dA2Tmwoz3E2QcP6HVoB4fCZlD5LwUYTU9SBx3wJIfosGTdGOmmGrML8SeF7RLA5JOOSI7QYpNtxOcXCt9Nshqf7iHCHxR91o4BYdrg6pP27jkDBwkElpOWvQGyA1NDkqretDmvmQJmuQhK/iLMvbMWBUptrJcrZs3xGkdiTjnuFXZ2NcTQUJ4w0fDFM7hMRE8okzgDduY5AqMDbUGe5dQbaRCKnCJ0IihBMWX1fHPGkdkmILAxjMmi4fiEYNvj19Re8MEl3NLWs+WlI+RQ7NtJCwvQSYVCF5CiDRCUbV+koLxm0MEtoTI3KpJkPqEIz+/VNUn4fi0jZIMKehSQu+AEXW8TMxHEIrDOXOIPFdAMZEKBBxMhUkvgpVS8sJT1D84UZJb1biCy8cipuQIEkAsPqIKYmQ6jBN07Y//nXMQ3EuuB2SrBqlWQO3MXB3BfDTIZisNNS7i0nhdpLGSqK9qSDh0IEuE6pFIWkwVgTvmrQJCfdAFLlXWqk3BG4cMsIPJI8JXwJsgaRBM3gG1faSArVbGhtEvhtIwc4kLrfIxFuWSpD4i75ZsOrCYdNhitbFtZuqkGBXdYbhA2iU2oqCyVMFrExKjPKckse20JALtNHQyEYnU4ky1vgiAjxKi0DSh7A8i2waujaElW4dFpWKBwnu9yDBgxySovYaTLTEwPhlTuBfVFXZsAu9QkjwUQKSDQ8jJKKQTJ5kCLW7436481iihiwgyYahoSephgzTXrUnG3IAyeyrTbup9E24CTPHCtiZ6NN207bZ2AoM8ea4cA/Pk6YTeLvZsKaqQWeYMMJnh5CmxDDk6MnBCmySkdSQ+d0ASTNkkQLAg9yTGLZoRqElmrf7rM+wXWpnMITWIiTDUAUksN5FSIrXqnQydV+xnZsqXgneN8ML+CeysVG35pbOr/LDFnFTFS4ObjIEl9x5rWLyC1Xv+toHR3dO+AU9/Ny4Qfxb53+hJW7IGttVF+0xgz/hM9X4hxYqVKhQoUKFCj2AzM2Dx8yq3m9hzf1pPp2Wg0NQq1yeJpey1FZGZ88uVmfGcFsRQk7VtZm98r1k1mTsOsllKrZGm6f7fdLSpurGwdzXIViV+3t1YqlOkiDhlrna28uVqisqi83x6gC0j6kvrnSQLFuRs1RLJcjsEVjR4+nClFFKvyqXSgdJmrHr1Z7ffmVyTfiuy5QoivJHhCQN3L2npqorME9VWfm6glMyJBME/wuxw0Nmiv/EdXElfG3WB4Og0+JydSCqSflbIXZuZkr4eS7cFjEXe503JUJyG71eT7eGqq2u+GmZDhcaU2mGfwSO+hhe8vfq/SFlrF0Su5AjuGVpzrusiVtr83GbMWXVGYh3GiUwPV7h5uNJr1ca4Md4NQJlNJ3XcJ4IyWKq2u7YGnzjWrMDb9SZqjXL0tzWNK/8bgq3aNipMsMKHYUSsc07Yxo5KTc1Bfe9Z00VpjSFMtwTBnukbVr8nAJrJUi73mFU87Z4uyplW8sUH0rJkPgBgKJRXsUBKOpwgZUls039E1A8GOC1IITKqtKmeHhS80y021TR2Az44Ra1RhR+LNHBo2mApPHqGqqp7XpFhc/j0AfesWg+dTMkqg1X/EyxHEDitbQUv/qqf9ZrKDIpuQNrBXbanglZI91GdyadqIBlap1qY+QqILnDBtaGyMPhsFeXGuBoeNDMEzEjr450MyTadUXbcdz4kAZtr2RhasvKxMRDFOFQcIeocZjxWh2eM2LNFb+5wn1PQIIXcxLMbjU8j6phEgX+uGdGf4+6ERIvmDUnlB/P+ZB4nUxb1BjgODFhQJK+i1qJMzF+viZOyPUVnuMta4JRCCmSAmClAR6cVeBOmqYi/mGEkBpRSMyDxEvNsOhBG0cgWUxR4Kuv40F0RVQ2gNPheZ8sfA7PHA0vH5hhfRJh7SGvC02ChEeaslzhh4071PZ+KfU0v3LIK54ipgfJ9d6OQcKaI3WMw5AfDFeaPAZ7woULr6jxEqP6CmY5rJqxu5UbINUNWBT2JRht5H5/A7WX0Hn8aWUAUZgXVsUh9SKQeO0HqwNNfvg9AE+iq6GnlfAkGuwqSOWewfAgmDRugISFc0rXNSDC5TgHn/JKJp7FVbkjYRi+BZIOr9TlRKF8UpJkjElmtVo1dd3ETbU4JMnUrVOsGoARGIUkq37eiJjlHlyYfcleZxRGF1ntTuu6hT+hEZsZt0DirqcpvPhB8goe+Z3LZdV7O4RULyHJEeOlqDFIuNQVkXCMMdsrn8ytTnn5tN20sQBCZrzo9TZIrqi0JmIuwt8JUeV0Xh4yxif+KCR9aE9G89EKbpnoIaQaVveRYUn4r8Xr4Wgjt0kSqlqyI78A8xp+CyQJ63YheHudqlGIMEQlkHHbCDgCSe8R/hZW1PcjMQnBYsIpfrrEy3AD43mVPiNiOaXAqkuECly7XXNIDaayHl+7qU2vH1NbhX8EP8+xJkTDih+izZDNzFaZB6k+JipmB1RlMxPXbiqs3fCNkVeCJD6Ml5CRHIdtIask21iI3/B7XumNxz0+njrj8biDTjEeN7w5UF/CtXEYm/XyUFY1w/vRzAjuXPpDpzZua6rWFtU75fAdqyGrKvX2E7A0SxvfcxfvQmbFdSu7HxqZ9RvrX/R6olkzLBEaQKqkfaXHKF9MpxC5hndwqvdHVb1imrV28JOKQkmaNidtnFuNvG5J5kF98Xu3LL81/vNpzDDxUHtFRLpF03G33R1n+T/S+DOqUpvW8rvXVqhQoUKFChUqVKhQoUKFChUqVKhQoUKFCj2E/g94zjCK5QNdYAAAAABJRU5ErkJggg=="
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    // {
    //   title: "Changelog",
    //   content: (
    //     <div>
    //       <p
    //         className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    //         Deployed 5 new components on Aceternity today
    //       </p>
    //       <div className="mb-8">
    //         <div
    //           className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Card grid component
    //         </div>
    //         <div
    //           className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Startup template Aceternity
    //         </div>
    //         <div
    //           className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Random file upload lol
    //         </div>
    //         <div
    //           className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Himesh Reshammiya Music CD
    //         </div>
    //         <div
    //           className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Salman Bhai Fan Club registrations open
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <img
    //           src="https://assets.aceternity.com/pro/hero-sections.png"
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //         <img
    //           src="https://assets.aceternity.com/features-section.png"
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //         <img
    //           src="https://assets.aceternity.com/pro/bento-grids.png"
    //           alt="bento template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //         <img
    //           src="https://assets.aceternity.com/cards.png"
    //           alt="cards template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //       </div>
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

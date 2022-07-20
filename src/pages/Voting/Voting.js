import React, {useEffect} from "react";
import SearchRow from "../../components/SearchRow/SearchRow";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import cat from "../../images/temporary-cat.jpg";
import Reactions from "../../components/Reactions/Reactions";
import ActionLog from "../../components/ActionLog/ActionLog";
import "./voting.scss";
import { getRandomCat } from "../../features/cats/catSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAsyncRandom } from "../../features/cats/catSlice";


const Voting = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncRandom());
  }, [dispatch]);

  const randomImg = useSelector(getRandomCat).url;
  console.log(randomImg);

  return (
    <div className="voting main-section">
      <div className="main-background">
        <SearchRow />
        <ContentContainer title="VOTING">
          <div className="img-reactions">
            <img className="main-img" src={randomImg} alt="" />
            <Reactions />
          </div>
          <div className="action-logs">
            {/*will be forEach */}
            <ActionLog />
            <ActionLog />
            <ActionLog />
            <ActionLog />
          </div>
        </ContentContainer>
      </div>
    </div>
  );
};

export default Voting;

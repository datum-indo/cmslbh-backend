import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseIncidentLocationOrderByInput } from "../../../inputs/CaseIncidentLocationOrderByInput";
import { CaseIncidentLocationWhereInput } from "../../../inputs/CaseIncidentLocationWhereInput";
import { CaseIncidentLocationWhereUniqueInput } from "../../../inputs/CaseIncidentLocationWhereUniqueInput";
import { CaseIncidentLocationScalarFieldEnum } from "../../../../enums/CaseIncidentLocationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCaseIncidentLocationArgs {
  @TypeGraphQL.Field(_type => CaseIncidentLocationWhereInput, {
    nullable: true
  })
  where?: CaseIncidentLocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseIncidentLocationOrderByInput], {
    nullable: true
  })
  orderBy?: CaseIncidentLocationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseIncidentLocationWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseIncidentLocationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CaseIncidentLocationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "kodeMt" | "case_id"> | undefined;
}

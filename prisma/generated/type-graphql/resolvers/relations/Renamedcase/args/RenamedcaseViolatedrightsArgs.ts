import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseViolatedRightOrderByInput } from "../../../inputs/CaseViolatedRightOrderByInput";
import { CaseViolatedRightWhereInput } from "../../../inputs/CaseViolatedRightWhereInput";
import { CaseViolatedRightWhereUniqueInput } from "../../../inputs/CaseViolatedRightWhereUniqueInput";
import { CaseViolatedRightScalarFieldEnum } from "../../../../enums/CaseViolatedRightScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RenamedcaseViolatedrightsArgs {
  @TypeGraphQL.Field(_type => CaseViolatedRightWhereInput, {
    nullable: true
  })
  where?: CaseViolatedRightWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseViolatedRightOrderByInput], {
    nullable: true
  })
  orderBy?: CaseViolatedRightOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseViolatedRightWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseViolatedRightWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CaseViolatedRightScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "kodeMt" | "case_id"> | undefined;
}

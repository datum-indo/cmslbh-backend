import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressOrderByInput } from "../../../inputs/CaseProgressOrderByInput";
import { CaseProgressWhereInput } from "../../../inputs/CaseProgressWhereInput";
import { CaseProgressWhereUniqueInput } from "../../../inputs/CaseProgressWhereUniqueInput";
import { CaseProgressScalarFieldEnum } from "../../../../enums/CaseProgressScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCaseProgressArgs {
  @TypeGraphQL.Field(_type => CaseProgressWhereInput, {
    nullable: true
  })
  where?: CaseProgressWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressOrderByInput], {
    nullable: true
  })
  orderBy?: CaseProgressOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseProgressWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseProgressWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "catatan" | "createdAt" | "createdBy" | "jenisPeradilan" | "updatedAt" | "updatedBy"> | undefined;
}
